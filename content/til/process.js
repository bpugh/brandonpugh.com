const fs = require('fs');
const path = require('path');

// Function to process a single markdown file
function processMarkdownFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');

    // Find the first heading (# )
    let title = null;
    let contentStartIndex = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('# ')) {
            title = line.replace(/^#\s*/, '').trim();
            contentStartIndex = i + 1;
            break;
        }
    }

    if (!title) {
        console.log(`No top-level heading found in ${filePath}. Skipping.`);
        return;
    }

    // Extract existing front matter
    let frontMatter = null;
    let content = lines.slice(contentStartIndex).join('\n').trim();
    console.log("🚀 ~ processMarkdownFile ~ content:", content)

    if (fileContent.startsWith('---')) {
        const endIndex = lines.indexOf('---\r', 1);
        console.log("🚀 ~ processMarkdownFile ~ lines:", lines)
        console.log("🚀 ~ processMarkdownFile ~ endIndex:", endIndex)
        if (endIndex !== -1) {
            frontMatter = lines.slice(1, endIndex).join('\n');
            // content = lines.slice(endIndex + 1).join('\n').trim();
        }
    }

    // Create or update front matter
    const frontMatterObj = {};
    if (frontMatter) {
        console.log("🚀 ~ processMarkdownFile ~ frontMatter:", frontMatter)
        frontMatter.split('\n').forEach((line) => {
            const [key, ...rest] = line.split(':');
            if (key && rest) {
                frontMatterObj[key.trim()] = rest.join(':').trim();
            }
        });
    }

    // Set or overwrite the title property
    frontMatterObj.title = `"${title}"`;
    frontMatterObj.tags = `["css"]`;

    // Reconstruct the front matter
    const updatedFrontMatter = `---\n${Object.entries(frontMatterObj)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n')}\n---`;

    // Write the updated content back to the file
    const updatedContent = `${updatedFrontMatter}\n\n${content}`;
    fs.writeFileSync(filePath, updatedContent, 'utf8');

    console.log(`Processed ${filePath}`);
}

// Function to process all markdown files in a directory
function processMarkdownFiles(directory) {
    const files = fs.readdirSync(directory);

    files.forEach((file) => {
        const filePath = path.join(directory, file);
        if (fs.lstatSync(filePath).isFile() && file.endsWith('.md')) {
            processMarkdownFile(filePath);
        }
    });
}

// Run the script on a target directory
const targetDirectory = './css'; // Change this to your target directory
processMarkdownFiles(targetDirectory);
