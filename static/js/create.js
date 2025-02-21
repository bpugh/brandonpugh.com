javascript: (function () {
  var url = window.location.href;
  var githubUrl = 'https://github.com/bpugh/brandonpugh.com/';
  var exampleMatch = url.match(/https:\/\/jamesg\.blog\/([^\/]+)/);
  if (exampleMatch) {
    var example = exampleMatch[1];
    var filename = `${encodeURIComponent(example)}.md`;
    var value = `---\nlayout: default\ntitle: ${example}\npermalink: /${example}/\n---\n\n`;
    var value = encodeURIComponent(value);
    if (document.body.innerText.includes('Page Not Found')) {
      var githubCreateUrl = `${githubUrl}/new/main/pages/templates?filename=${filename}&value=${value}`;
      window.open(githubCreateUrl, '_blank');
      return;
    }
    var githubEditUrl = `${githubUrl}/edit/main/pages/templates/${filename}`;
    window.open(githubEditUrl, '_blank');
    return;
  }
  var postMatch = url.match(/https:\/\/jamesg\.blog\/(\d{4})\/(\d{2})\/(\d{2})\/(.+)\//);
  if (postMatch) {
    var year = postMatch[1];
    var month = postMatch[2];
    var day = postMatch[3];
    var slug = postMatch[4];
    var postEditUrl = `${githubUrl}/edit/main/pages/posts/${year}-${month}-${day}-${slug}.md`;
    window.open(githubUrl, '_blank');
    return;
  }
  alert('URL format is incorrect or not supported.');
})();
