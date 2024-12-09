// SWIPER
const swiper = new Swiper(".header__slider", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// PARAMETERS
document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__btn");
  const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
  const dropDownListItems = dropDownList.querySelectorAll(
    ".dropdown__list-item"
  );

  dropDownBtn.addEventListener("click", function () {
    dropDownList.classList.toggle("dropdown__list--visible");
  });

  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener("click", function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownList.classList.remove("dropdown__list--visible");
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target !== dropDownBtn) {
      dropDownList.classList.remove("dropdown__list--visible");
    }
  });
});

new Swiper(".feedback__comments", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

// MOBILE NAV
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
  });
});
