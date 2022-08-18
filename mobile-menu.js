const menuWrapper = document.querySelector("header .mobile");
const menuButton = document.querySelector("header .mobile .hamburger");

const toggleMenu = () => {
  menuWrapper.classList.toggle("open");
};

menuButton.addEventListener("click", () => {
  toggleMenu();
});
