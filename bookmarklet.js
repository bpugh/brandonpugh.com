(function () {
  // Function to slugify a given text for the filename
  function slugify(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  // Attempt to get the article title from meta tags first
  function getArticleTitle() {
    var metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (metaOgTitle && metaOgTitle.content) return metaOgTitle.content;
    var metaTwitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (metaTwitterTitle && metaTwitterTitle.content) return metaTwitterTitle.content;
    var metaTitle = document.querySelector('meta[name="title"]');
    if (metaTitle && metaTitle.content) return metaTitle.content;
    var hEntryTitle = document.querySelector('.h-entry .p-name');
    if (hEntryTitle) return hEntryTitle.textContent.trim();
    return document.title;
  }

  // Get the title, URL, and slug for the filename
  var title = getArticleTitle();
  var url = window.location.href;

  // If the URL is a YouTube video, remove the trailing " - YouTube" from the title if present.
  if (/youtube\.com\/watch|youtu\.be\//i.test(url)) {
    title = title.replace(/\s+-\s+YouTube$/, '');
  }

  var slug = slugify(title);

  // Get current date in YYYY-MM-DD format
  var date = new Date().toISOString().split('T')[0];

  // If any text is selected, include it as a blockquote in the markdown
  var selectedText = window.getSelection().toString().trim();
  var quoteBlock = '';
  if (selectedText) {
    quoteBlock = '\n\n> ' + selectedText.replace(/\n/g, '\n> ');
  }

  // Build the Markdown content with YAML frontmatter including a tags field
  var content = `---\ndate: ${date}\ntitle: "${title}"\ntags: [""]\n---\n\n[${document.title}](${url})${quoteBlock}\n`;

  // URL-encode the content for use in the query string
  var encodedContent = encodeURIComponent(content);

  // Construct the GitHub new file URL with filename and value parameters
  var githubUrl = `https://github.com/bpugh/brandonpugh.com/new/main/content/links/?filename=${slug}.md&value=${encodedContent}`;

  // Open the constructed GitHub URL in a new tab
  window.open(githubUrl, '_blank');
})();
