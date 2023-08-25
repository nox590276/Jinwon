window.addEventListener('load', () => {
  const $contents = document.querySelectorAll('#main_contents>div')
  const $businessSection = document.querySelectorAll('#business_section>li')
  const $headerWrap = document.querySelector('#header_wrap')
  const $mainMenu=document.querySelectorAll('#mainmenu_list>li>a');
  const $logo= document.querySelector('#logo>span')
  const $subMenuList = document.querySelectorAll('.submenu_list');

  //  window.addEventListener('mousewheel',wheelWindow)
  window.addEventListener('scroll', scrollEvent)
  window.addEventListener('scroll', scrollEventMenu)

  let windowHeight = window.innerHeight;
  let clickIndex = 0;
  let slideLength = $contents.length;
  let isWheel = false;
  let scrollposition = null;
  let closeHeight = 120;


  function scrollEventMenu() {
    scrollposition = window.pageYOffset;
    if (scrollposition >= 30) {
      gsap.to($headerWrap, { backgroundColor: 'white', duration: 0.5 });
      for (let item of $mainMenu) {
        gsap.to(item, { color: '#1B2040', duration: 0.5 });
      }
      gsap.to($logo,{color :'#1B2040'})
      gsap.to($subMenuList,{hegiht:closeHeight})
    } else {
      gsap.to($headerWrap, { backgroundColor: 'transparent', duration: 0.5 });
      for (let item of $mainMenu) {
        gsap.to(item, { color: 'white', duration: 0.5 });
      }
      gsap.to($logo,{color :'white'})
    }
  }

  function activateMainMenu(index) {
    if (selectedMenu != null && selectedMenu != $mainMenu[index]) {
      selectedMenu.classList.remove('selected')
    }
    if (selectedMenu != $mainMenu[index]) {
      selectedMenu = $mainMenu[index]
      selectedMenu.classList.add('selected')
    }
  }
  function scrollSlide(index) {
    gsap.to('body,html', {
      scrollTop: windowHeight * index, duration: 0.5, onComplete: () => {
        isWheel = false;
      }
    })
  }
  function wheelWindow(e) {
    if (e.wheelDelta <= -120 && isWheel == false && clickIndex < slideLength - 1) {
      isWheel = true;

      clickIndex++;

      scrollSlide(clickIndex);
      activateMainMenu(clickIndex);

    } else if (e.wheelDelta > -120 && isWheel == false && clickIndex > 0) {
      isWheel = true;
      clickIndex--;

      scrollSlide(clickIndex);
      activateMainMenu(clickIndex);
    }
  }


  function scrollEvent() {
    scrollposition = window.pageYOffset;
    if (scrollposition >= 500) {
      for (i = 0; i <= $businessSection.length; i += 1) {
        gsap.to($businessSection[i], { top: 0, delay: 0.2 * i, duration: 0.5, opacity: 1, ease: 'power.out' })
      }
    }
  }


})
