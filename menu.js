(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-mobile-menu-open]"),
    closeMenuBtn: document.querySelector("[data-mobile-menu-close]"),
    menu: document.querySelector("[data-mobile-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle("header__menu-backdrop--is-open");
  }
})();