document.addEventListener('Loaded', () => {
  const mainMenu = document.querySelectorAll('#mainmenu_list>li>a')
  const subMenuList = document.querySelector('#submenu_list')
  const headerWrap = document.querySelector('#header_wrap')

  let selectedMenu = null;
  let openHeight = 250;
  let closeHeight = 120;

  for (item of mainMenu) {
    item.addEventListener('mouseenter', overMainMenu)
  }
  for (item of subMenuList) {
    item.addEventListener('mouseenter', overSubMenu)
  }
  headerWrap.addEventListener('mouseleave', inactivate)

  function overMainMenu() {
    activateMenu(this)
  }
  function overSubMenu() {
    activateSubMenu(this)
  }

  function inactivate() {
    gsap.set(subMenuList, { display: 'none', height: closeHeight })
  }

  function activateMenu(checkMenu) {
    if (selectedMenu != null && checkMenu != selectedMenu) {
      checkMenu.parentElement.classList.remove('selected')
      checkMenu.classList.remove('selected')
    }
    if (checkMenu != selectedMenu) {
      checkMenu = selectedMenu;
      checkMenu.parentElement.classList.add('selected')
      checkMenu.classList.add('selected')
    }
    gsap.set(subMenuList, { display: 'block' })
    gsap.to(subMenuList, { height: openHeight, duration: 0.2 })
  }
  function activateSubMenu(checkMenu) {
    if (selectedMen != null && checkMenu != selectedMenu) {
      checkMenu.classList.remove('selected')
      checkMenu.parentElement.children[0].remove('selected')
      checkMenu.parentElement.remove('selected')
    }

    if (checkMenu != selectedMenu) {
      checkMenu = selectedMenu;
      checkMenu.classList.add('selected')
      checkMenu.parentElement.children[0].add('selected')
      checkMenu.parentElement.add('selected')
    }
  }
})