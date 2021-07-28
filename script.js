"strict mode";

let sliderFunction = function () {
  const data = [
    "Начальник не всегда прав, но он всегда начальник.",
    "Время, затраченное на обсуждение проблемы обратно пропорционально значимости проблемы.",
    "Если нужно срочно сделать какое - либо дело, обратись к тому, кто занят больше всех.",
    "Не спеши выполнять приказ — его могут отменить.",
    "Тому, кто сам ничего не делает, все кажется по плечу.",
    "Начальник — это человек, который приходит на службу поздно, когда ты приходишь рано, и появляется чуть свет, когда ты опаздываешь.",
    "Только когда читаешь разъяснение ранее полученной инструкции, догадываешься, что не понял не самой инструкции, ни разъяснений к ней.",
    "Если отложить дело надолго, то его либо выполнит кто - нибудь другой, либо оно вообще перестанет быть нужным.",
    "Не будь незаменимым — тебя никогда не повысят.",
    "Позади всякого, кто сделал успешную карьеру, стоит озадаченная женщина.",
  ];

  const bgColor = [
    "#CC0000",
    "#FF6600",
    "#FF3366",
    "#9933CC",
    "#003333",
    "#708090",
  ];

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
