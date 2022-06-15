const humberger = document.querySelector(".humberger");
const headerLinks = document.querySelector(".header-links");

humberger.addEventListener("click", () => {
  headerLinks.classList.toggle("open");
});
