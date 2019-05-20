(function() {
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
})();
