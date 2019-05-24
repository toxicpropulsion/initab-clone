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

  // Settings custom web links
  const customLinksTextarea = document.getElementById("webLinksTextarea");

  function readLinksFromTextarea(textarea) {
    return textarea.value.split(",");
  }

  function writeLinksToTextarea(textarea, links) {
    textarea.value = links;
  }

  // Timetable
  function getCurrentTime() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    return `${hours}:${minutes}`;
  }

  function getCurrentDate() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    const today = new Date();
    const date = today.toLocaleDateString(undefined, options);
    return date;
  }

  function updateTimetable() {
    const timetable = document.getElementById("datetime");
    const time = getCurrentTime();
    const date = getCurrentDate();
    timetable.innerHTML = `<span class="time">${time}</span><span class="date">${date}</span>`;
  }

  updateTimetable();

  setInterval(updateTimetable, 1000);

  // tabs
  function toggleTab(tab) {
    const isActive = tab.classList.contains("active");
    if (isActive) return false;
    deactivateElements(tab.parentNode.children);
    tab.classList.add("active");
    const dataTarget = tab.dataset.target;
    if (dataTarget) {
      const target = document.getElementById(dataTarget);
      deactivateElements(target.parentNode.children);
      target.classList.add("active");
    }
    return true;
  }

  function deactivateElements(elements) {
    const len = elements.length;
    for (let i = 0; i < len; i++) {
      elements[i].classList.remove("active");
    }
  }

  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", event => {
      event.preventDefault();
      toggleTab(event.target);
    });
  });

  document.addEventListener("DOMContentLoaded", event => {
    const customLinks = localStorage.getItem("links");
    writeLinksToTextarea(customLinksTextarea, customLinks);
  });

  customLinksTextarea.addEventListener("change", event => {
    const customLinks = readLinksFromTextarea(customLinksTextarea);
    setCustomWebLinks(customLinks);
    renderWebLinks();
  });
})();
