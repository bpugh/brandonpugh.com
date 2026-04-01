# DevContainer Configuration

This devcontainer is configured for Hugo static site development.

## What's Included

- **Hugo Extended** v0.153.2 - Static site generator
- **Git** - Version control
- **Node.js LTS** - For additional tooling if needed

## VS Code Extensions

The following extensions are automatically installed:
- Hugo Language Support
- TOML Support (for config files)
- Markdown All in One
- Markdown Linting

## Getting Started

1. Open this project in VS Code
2. When prompted, click "Reopen in Container" (or use Command Palette: `Remote-Containers: Reopen in Container`)
3. Wait for the container to build and start
4. Run `hugo server -D` to start the development server
5. Open http://localhost:1313 in your browser

## Available Commands

```bash
# Start development server with drafts
hugo server -D

# Build the site
hugo

# Create a new post
hugo new post/my-new-post.md

# Create a new TIL (using existing script)
./new-til.sh "Title of TIL"
```

## Port Forwarding

Port 1313 is automatically forwarded for the Hugo development server.
