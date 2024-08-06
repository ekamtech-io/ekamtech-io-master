/*
Name:           Demo Creative Agency 2
Written by:     Okler Themes - (http://www.okler.net)
Theme Version:  10.2.0
*/

(function ($) {
  "use strict";

  $(window).on("load", function () {
    setTimeout(function () {
      $(".custom-hero-bg").addClass("loaded");
    }, 500);
  });
}).apply(this, [jQuery]);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop, // Adjust this value based on your header height
      behavior: "smooth",
    });
  });
});

function scrollToDiv(divId, offset = 0) {
  const element = document.querySelector(divId);
  const elementPosition =
    element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
