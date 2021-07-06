const menuButton = document.getElementById("js-menu-button");
const menu = document.getElementById("js-menu");
const body = document.body;

/* OPEN-CLOSE MOBILE MENU */
const controlMobileMenu = () => menu.classList.toggle("is-visible");

/* NAVIGATION MOBILE */
const BREAKPOINT_MENU = 640; //Same value of media query change from mobile to desktop menu
const navigation = (e) => {
  if (window.innerWidth <= BREAKPOINT_MENU && e.target.matches("a")) {
    controlMobileMenu();
  }
};

/* NAVIGATION MOBILE */
menu.addEventListener("click", navigation);

/************ EVENTS *************/

/* OPEN-CLOSE MOBILE MENU */
menuButton.addEventListener("click", controlMobileMenu);
