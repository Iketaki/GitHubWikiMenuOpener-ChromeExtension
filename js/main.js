window.onload = function () {
  document
    .querySelector("#wiki-pages-box div.js-wiki-sidebar-toggle-display")
    .classList.remove("d-none");

  document
    .querySelectorAll(
      "#wiki-pages-box div.js-wiki-sidebar-toggle-display ul li details"
    )
    .forEach((elem) => elem.setAttribute("open", "open"));

  document
    .querySelectorAll(
      "#wiki-pages-box div.js-wiki-sidebar-toggle-display ul li"
    )
    .forEach((elem) => elem.classList.remove("wiki-more-pages"));

  document
    .querySelector(
      "#wiki-pages-box div.js-wiki-sidebar-toggle-display ul li.wiki-more-pages-link"
    )
    .remove();

  document
    .querySelectorAll(".gollum-markdown-content details")
    .forEach((elem) => elem.setAttribute("open", "open"));

  const parent = document.querySelector(".wiki-rightbar");
  const wikiBox = parent.querySelector("#wiki-pages-box");
  const gollum = parent.querySelector(".gollum-markdown-content");
  parent.insertBefore(gollum, wikiBox);
};
