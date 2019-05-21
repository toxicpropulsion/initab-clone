const DEFAULT_LINKS = [
  "https://reactjs.org/",
  "https://angularjs.org/",
  "https://sass-lang.com/",
  "https://getbootstrap.com/",
  "https://fontawesome.com/",
  "https://developer.mozilla.org/",
  "https://github.com/",
  "https://gitlab.com/",
  "https://nodejs.org/en/",
  "https://webpack.js.org/",
  "https://gulpjs.com/",
  "https://www.npmjs.com/",
  "https://css-tricks.com/",
  "https://www.typescriptlang.org/",
  "https://coffeescript.org/",
  "https://babeljs.io/",
  "https://parceljs.org/",
  "https://codepen.io/",
  "https://jsfiddle.net/",
  "https://gmail.com",
  "https://www.youtube.com/",
  "https://www.reddit.com/",
  "https://cnn.com"
];

(function() {
  // Navigation
  const menu = document.getElementById("menu");
  menu.addEventListener("click", event => {
    if (event.target.classList.contains("navlink")) {
      const target = event.target.dataset.target;
      const box = document.getElementById(target);
      const boxes = document.querySelectorAll(".box");
      for (b of boxes) {
        b.classList.remove("active");
      }
      box.classList.add("active");
    }
  });

  // Custom Web Links
  function setCustomWebLinks(links) {
    localStorage.setItem("links", links);
  }

  function getCustomWebLinks() {
    let links = localStorage.getItem("links");
    if (!links) {
      setCustomWebLinks(DEFAULT_LINKS);
      return DEFAULT_LINKS;
    } else {
      return links.split(",");
    }
  }

  function renderWebLinks() {
    const list = document.getElementById("customWebLinks");
    const links = getCustomWebLinks();

    const linksHTML = links.reduce((acc, cur) => {
      acc += `<li><a href="${cur}">${cur}</a></li>`;
      return acc;
    }, "");

    list.innerHTML = linksHTML;
  }

  renderWebLinks();
})();
