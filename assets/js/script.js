"use strict";

/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", headerActive);

window.scroll({
  top: 2500,
  left: 0,
  behavior: "smooth",
});

window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: "smooth",
});

document.querySelector(".hello").scrollIntoView({
  behavior: "smooth",
});

//new js
document.addEventListener("DOMContentLoaded", function () {
  // Select all links with the data-nav-link attribute
  const navLinks = document.querySelectorAll("[data-nav-link]");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default anchor behavior

      // Get the target section id from the href attribute
      const targetId = this.getAttribute("href").substring(1);

      // Scroll to the target section (if needed)
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });

      // Update the URL without the #
      const newUrl =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "service";
      history.pushState({ path: newUrl }, "", newUrl);
    });
  });

  // Handle the back/forward navigation
  window.addEventListener("popstate", function (event) {
    if (window.location.pathname.endsWith("service")) {
      document.getElementById("service").scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
