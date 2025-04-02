(function () {
  // Slugify a given text to create a URL-friendly filename
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
    return document.title;
  }

  // Get the title, URL, and slug for the filename
  var title = getArticleTitle();
  var url = window.location.href;
  var slug = slugify(title);

  // Get current date in YYYY-MM-DD format
  var date = new Date().toISOString().split('T')[0];

  // If any text is selected, include it as a blockquote in the markdown
  var selectedText = window.getSelection().toString().trim();
  var quoteBlock = '';
  if (selectedText) {
    quoteBlock = '\n\n> ' + selectedText.replace(/\n/g, '\n> ');
  }

  // Build the markdown content with YAML frontmatter
  var content = `---\ndate: ${date}\ntitle: "${title}"\n---\n\n[${title}](${url})${quoteBlock}`;

  // Encode the content for use in a URL query string
  var encodedContent = encodeURIComponent(content);

  // Construct the GitHub new file URL with filename and value parameters
  var githubUrl = `https://github.com/bpugh/brandonpugh.com/new/main/content/links/?filename=${slug}.md&value=${encodedContent}`;

  // Navigate to the constructed GitHub URL
  window.location.href = githubUrl;
})();
