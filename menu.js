(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-mobile-menu-open]"),
    closeMenuBtn: document.querySelector("[data-mobile-menu-close]"),
    menu: document.querySelector("[data-mobile-menu]"),
    bodyNoScroll: document.querySelector("[data-nonScroll]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("header__menu-backdrop--is-open");
    refs.bodyNoScroll.classList.toggle("no-scroll")
  }
})();