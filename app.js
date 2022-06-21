const humberger = document.querySelector(".humberger");
const headerLinks = document.querySelector(".header-links");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const subHeader1 = document.querySelector(".sub-header-1");
const subHeader2 = document.querySelector(".sub-header-2");
const subHeader3 = document.querySelector(".sub-header-3");

humberger.addEventListener("click", () => {
  headerLinks.classList.toggle("open");
});
link1.addEventListener("click", () => {
  subHeader1.classList.toggle("open-sub-header");
});
link2.addEventListener("click", () => {
  subHeader2.classList.toggle("open-sub-header");
});
link3.addEventListener("click", () => {
  subHeader3.classList.toggle("open-sub-header");
});
