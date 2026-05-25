(function () {
  const container = document.querySelector(".like-button-container");
  if (!container) return;

  const slug = container.dataset.slug;
  const apiUrl = container.dataset.api;
  if (!apiUrl) return;

  const button = container.querySelector(".like-button");
  const countEl = container.querySelector(".like-count");
  const storageKey = "liked:" + slug;

  if (localStorage.getItem(storageKey)) {
    button.classList.add("liked");
    button.setAttribute("aria-label", "Already liked");
  }

  // Fetch current count
  fetch(apiUrl + "?slug=" + encodeURIComponent(slug))
    .then((r) => r.json())
    .then((data) => {
      countEl.textContent = data.count || "";
    })
    .catch(() => {});

  button.addEventListener("click", function () {
    if (localStorage.getItem(storageKey)) return;

    button.classList.add("liked");
    button.setAttribute("aria-label", "Already liked");
    localStorage.setItem(storageKey, "1");

    fetch(apiUrl + "?slug=" + encodeURIComponent(slug), { method: "POST" })
      .then((r) => r.json())
      .then((data) => {
        countEl.textContent = data.count || "";
      })
      .catch(() => {});
  });
})();
