"strict mode";

let sliderFunction = function () {
  const btn = document.querySelector(".btn");
  const body = document.querySelector("body");
  let count = 0;

  let startApp = function (e) {
    e.stopPropagation();
    this.classList.add("hide");
    initApp();
  };

  let initApp = function () {
    createSlides();
    body.addEventListener("click", showSlide);
  };

  let showSlide = function () {
    let slides = document.querySelectorAll(".slide");

    if (count < slides.length - 1) {
      hideSingleSlide.call(slides[count]);
      count++;
      slides[count].style.backgroundColor = `${
        bgColor[randomBgColor(0, bgColor.length - 1)]
      }`;
      showSingleSlide.call(slides[count]);
    } else {
      hideSingleSlide.call(slides[count]);
      count = 0;
      showSingleSlide.call(slides[count]);
    }
  };

  let createSlides = function () {
    data.forEach((item, idx) => {
      let div = document.createElement("div");
      let text = document.createElement("div");

      div.style.backgroundColor = `${
        bgColor[randomBgColor(0, bgColor.length - 1)]
      }`;
      div.classList.add("slide");
      text.textContent = item;
      div.append(text);
      body.append(div);

      idx !== 0 ? div.classList.add("hide") : div.classList.add("show");
    });
  };

  let hideSingleSlide = function () {
    this.classList.add("hide");
    this.classList.remove("show");
  };

  let showSingleSlide = function () {
    this.classList.remove("hide");
    this.classList.add("show");
  };

  let randomBgColor = function (min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  };

  // * Btn Start App
  btn.addEventListener("click", startApp);
};

document.addEventListener("DOMContentLoaded", sliderFunction);
