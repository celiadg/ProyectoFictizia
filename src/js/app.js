const menuButton = document.getElementById("js-menu-button");
const menu = document.getElementById("js-menu");
const body = document.body;

/* OPEN-CLOSE MOBILE MENU */
const controlMobileMenu = () => menu.classList.toggle("is-visible");

/* ADD CLASS ACTIVE TO LINK CLICKED */
const controlDesktopMenu = (linkclick) => {
  menu
    .querySelectorAll("a")
    .forEach((link) => link.classList.remove("is-active"));
  linkclick.classList.add("is-active");
};

/* NAVIGATION MOBILE */
const BREAKPOINT_MENU = 768; //Same value of media query change from mobile to desktop menu
const navigation = (e) => {
  if (!e.target.matches("a")) return;
  window.innerWidth <= BREAKPOINT_MENU
    ? controlMobileMenu()
    : controlDesktopMenu(e.target);
};

/* NAVIGATION MOBILE */
menu.addEventListener("click", navigation);

/************ EVENTS *************/

/* OPEN-CLOSE MOBILE MENU */
menuButton.addEventListener("click", controlMobileMenu);
