const mobileNav = () => {
  const headerBarsBtn = document.getElementById("header__bars");
  const mobileCloseBtn = document.getElementById("mobile-nav__close-btn");
  const mobileNavElem = document.getElementById("mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");

  const handleMenuOpen = () => {
    mobileNavElem.classList.add("active");
    document.body.style.overflowY = "hidden";
  };
  const handleMenuClose = () => {
    mobileNavElem.classList.remove("active");
    document.body.style.overflowY = "auto";
  };

  headerBarsBtn.onclick = handleMenuOpen;
  mobileCloseBtn.onclick = handleMenuClose;

  mobileLinks.forEach((link) => (link.onclick = handleMenuClose));
};

export default mobileNav;
