/*Табы. Каталог*/
const tabHeaders = document.querySelectorAll("[data-tab]");
const contentBoxes = document.querySelectorAll("[data-tab-content]");
tabHeaders.forEach(function (item) {
  item.addEventListener("click", function () {
    contentBoxes.forEach(function (item) {
      item.classList.add("none");
    });
    const contentBox = document.querySelector("#" + this.dataset.tab);
    contentBox.classList.remove("none");
  });
});

/*Кнопка Топ*/
const offset = 100;
const scrollUp = document.querySelector(".scroll-up");
const scrollUpSvgPath = document.querySelector(".scroll-up__svg-path");
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = "stroke-dashoffset 20ms";

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

const updateDashoffset = () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const dashoffset = pathLength - (getTop() * pathLength) / height;
  scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

//onScroll
window.addEventListener("scroll", () => {
  updateDashoffset();
  if (getTop() > offset) {
    scrollUp.classList.add("scroll-up--active");
  } else {
    scrollUp.classList.remove("scroll-up--active");
  }
});

// Click
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/*Button menu*/
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.querySelector(".header-menu").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
  document.querySelector(".menu-list").classList.toggle("active");

}
