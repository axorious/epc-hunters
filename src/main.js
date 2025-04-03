document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const subTextLink = document.querySelector(".subtext-link");
  const subTextContainer = document.querySelector(".subtext-container");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("menu-open-active");
    subTextContainer.classList.toggle("menu-open");
    subTextLink.classList.toggle("menu-link-open");
  });
});
