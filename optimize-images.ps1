#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Optimize images for web by resizing and compressing them.

.DESCRIPTION
    This script uses ImageMagick to resize and compress images to web-friendly sizes.
    Original files are backed up with .original extension.

.PARAMETER Path
    Path to image file(s). Supports wildcards.

.PARAMETER MaxWidth
    Maximum width in pixels (default: 1600)

.PARAMETER Quality
    JPEG/WebP quality 1-100 (default: 85).
    Note: WebP automatically uses quality-10 for better compression while maintaining similar visual quality.

.PARAMETER Format
    Output format: 'jpeg' or 'webp' (default: jpeg)

.PARAMETER Backup
    Create backup of original files (default: $true)

.PARAMETER UpdateMarkdown
    Update markdown files to reference new filenames (default: $true when converting to WebP)

.EXAMPLE
    .\optimize-images.ps1 -Path "content/til/electronics/*.jpg"
    
.EXAMPLE
    .\optimize-images.ps1 -Path "content/til/electronics/*.jpg" -Format webp
    
.EXAMPLE
    .\optimize-images.ps1 -Path "image.jpg" -MaxWidth 1200 -Quality 80 -Format webp
#>

param(
    [Parameter(Mandatory=$true)]
    [string]$Path,
    
    [int]$MaxWidth = 1600,
    
    [ValidateRange(1, 100)]
    [int]$Quality = 85,
    
    [ValidateSet('jpeg', 'webp')]
    [string]$Format = 'jpeg',
    
    [bool]$Backup = $true,
    
    [bool]$UpdateMarkdown = $true
)

# Check if ImageMagick is installed
try {
    $magickVersion = magick --version 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "ImageMagick not found"
    }
} catch {
    Write-Host "ERROR: ImageMagick is not installed or not in PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Install ImageMagick:" -ForegroundColor Yellow
    Write-Host "  Windows: winget install ImageMagick.ImageMagick" -ForegroundColor Cyan
    Write-Host "  Or download from: https://imagemagick.org/script/download.php" -ForegroundColor Cyan
    exit 1
}

# Get files to process
$files = Get-ChildItem -Path $Path -File -ErrorAction SilentlyContinue

if ($files.Count -eq 0) {
    Write-Host "No files found matching: $Path" -ForegroundColor Yellow
    exit 0
}

Write-Host "Found $($files.Count) image(s) to optimize" -ForegroundColor Green
Write-Host "Settings: MaxWidth=$MaxWidth, Quality=$Quality, Format=$Format, Backup=$Backup" -ForegroundColor Cyan
Write-Host ""

$totalSavings = 0
$renamedFiles = @()

foreach ($file in $files) {
    $originalSize = $file.Length
    $originalSizeMB = [math]::Round($originalSize / 1MB, 2)
    
    Write-Host "Processing: $($file.Name) ($originalSizeMB MB)..." -NoNewline
    
    # Create backup if requested
    if ($Backup -and -not (Test-Path "$($file.FullName).original")) {
        Copy-Item -Path $file.FullName -Destination "$($file.FullName).original"
    }
    
    # Determine output filename
    $outputFile = $file.FullName
    if ($Format -eq 'webp') {
        $outputFile = [System.IO.Path]::ChangeExtension($file.FullName, '.webp')
    }
    $tempFile = "$outputFile.temp"
    
    # Optimize image with ImageMagick
    # -resize: only shrink if larger than MaxWidth, maintain aspect ratio
    # -quality: compression quality (works for both JPEG and WebP)
    # -strip: remove EXIF data to save space
    $arguments = @(
        $file.FullName,
        "-resize", "${MaxWidth}x${MaxWidth}>",
        "-strip"
    )
    
    if ($Format -eq 'jpeg') {
        # JPEG-specific optimizations
        $arguments += @(
            "-quality", $Quality,
            "-sampling-factor", "4:2:0",  # Standard chroma subsampling
            "-interlace", "Plane"          # Progressive JPEG
        )
    } elseif ($Format -eq 'webp') {
        # WebP-specific optimizations
        # Use slightly lower quality number since WebP is more efficient
        # method=6: Best compression (slower but smaller files)
        # Use quality 75-80 for WebP to match JPEG quality 85
        $webpQuality = [math]::Max(1, [math]::Min(100, $Quality - 10))
        $arguments += @(
            "-quality", $webpQuality,
            "-define", "webp:method=6",
            "-define", "webp:lossless=false",
            "-define", "webp:alpha-quality=100"
        )
    }
    
    $arguments += $tempFile
    
    $result = & magick @arguments 2>&1
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host " FAILED" -ForegroundColor Red
        Write-Host "  Error: $result" -ForegroundColor Red
        continue
    }
    
    # Replace/create output file
    Move-Item -Path $tempFile -Destination $outputFile -Force
    
    # If converting to WebP, remove original (since we have backup)
    if ($Format -eq 'webp' -and $outputFile -ne $file.FullName) {
        Remove-Item -Path $file.FullName -Force
        $renamedFiles += @{
            Old = $file.Name
            New = [System.IO.Path]::GetFileName($outputFile)
            Directory = $file.DirectoryName
        }
    }
    
    # Get new size
    $newFile = Get-Item $outputFile
    $newSize = $newFile.Length
    $newSizeMB = [math]::Round($newSize / 1MB, 2)
    $savings = $originalSize - $newSize
    $savingsPercent = [math]::Round(($savings / $originalSize) * 100, 1)
    $totalSavings += $savings
    
    Write-Host " DONE" -ForegroundColor Green
    Write-Host "  Before: $originalSizeMB MB -> After: $newSizeMB MB (saved $savingsPercent%)" -ForegroundColor Gray
}

Write-Host ""
Write-Host "Optimization complete!" -ForegroundColor Green
$totalSavingsMB = [math]::Round($totalSavings / 1MB, 2)
Write-Host "Total space saved: $totalSavingsMB MB" -ForegroundColor Cyan

if ($Backup) {
    Write-Host ""
    Write-Host "Original files backed up with .original extension" -ForegroundColor Yellow
    Write-Host "To remove backups: Get-ChildItem -Recurse -Filter '*.original' | Remove-Item" -ForegroundColor Gray
}

# Update markdown files if converting to WebP
if ($Format -eq 'webp' -and $UpdateMarkdown -and $renamedFiles.Count -gt 0) {
    Write-Host ""
    Write-Host "Updating markdown files..." -ForegroundColor Cyan
    
    foreach ($renamed in $renamedFiles) {
        # Find markdown files in the same directory
        $mdFiles = Get-ChildItem -Path $renamed.Directory -Filter "*.md"
        
        foreach ($mdFile in $mdFiles) {
            $content = Get-Content -Path $mdFile.FullName -Raw
            $oldName = $renamed.Old
            $newName = $renamed.New
            
            if ($content -match [regex]::Escape($oldName)) {
                $newContent = $content -replace [regex]::Escape($oldName), $newName
                Set-Content -Path $mdFile.FullName -Value $newContent -NoNewline
                Write-Host "  Updated: $($mdFile.Name)" -ForegroundColor Gray
            }
        }
    }
    Write-Host "Markdown updates complete!" -ForegroundColor Green
}
