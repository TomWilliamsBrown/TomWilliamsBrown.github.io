// Mobile nav toggle (replaces Bootstrap's collapse JS)
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".navbar-toggle");
  var collapse = document.querySelector("#navbar-collapse");
  if (toggle && collapse) {
    toggle.addEventListener("click", function () {
      collapse.classList.toggle("in");
    });
  }

  // Highlight active page in nav
  var path = window.location.pathname;
  var links = document.querySelectorAll(".navbar-nav a");
  links.forEach(function (link) {
    if (link.getAttribute("href") === path || link.getAttribute("href") === path.replace(/\/$/, "")) {
      link.classList.add("active");
    }
  });
});

// Navbar background fade on scroll
(function () {
  var navbar = document.querySelector(".navbar");
  if (!navbar) return;
  window.addEventListener("scroll", function () {
    var opacity = Math.min(window.pageYOffset / 150, 1);
    navbar.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";
  }, { passive: true });
})();

// Typed text effect for home page
function type() {
  if (typeof Typed !== "undefined") {
    new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 70,
      backSpeed: 0,
      backDelay: 2200,
      loop: true,
    });
  }
}

// Parallax background scroll for home page hero
function movingBackgroundImage() {
  var hero = document.querySelector(".hero-full-container");
  if (!hero) return;
  window.addEventListener("scroll", function () {
    var scrollPos = window.pageYOffset;
    hero.style.backgroundPositionY = -scrollPos * 0.3 + "px";
  });
}
