window.addEventListener('load', () => {
  const $visualWrap = document.querySelector('#mainvisual_wrap');
  const $visualLi = document.querySelectorAll('#mainvisual_list>li');
  const $dot = document.querySelectorAll('#dot_list>li');
  const $nextBtn = document.querySelector('.right.mainvisual');
  const $prevBtn = document.querySelector('.left.mainvisual');
  const $visualTitle = document.querySelectorAll('.visualtitle_wrap')

  let visualWidth = $visualWrap.offsetWidth;
  let visualLength = $visualLi.length

  let selectedDot = $dot[0];//도트활성화하기위한 변수

  let currentIndex = 0;
  let nextIndex = null;//nextindex가 무조건 다음이 아니라 사용자가 정하는것임

  let timer = setInterval(addvisualIndex, 4000);
  
  window.addEventListener('resize', () => {//반응형 작업임
    visualWidth = $visualWrap.offsetWidth;
  })

  for (item of $dot) {
    item.addEventListener('mouseenter', overDot)
  }

  $nextBtn.addEventListener('click', addvisualIndex)

  function addvisualIndex() {
    nextIndex = currentIndex + 1;
    if (nextIndex >= visualLength) {
      nextIndex = 0;
    }
    slideNextVisual(nextIndex)
    activateDot(nextIndex)
  }

  $prevBtn.addEventListener('click', removeVisualIndex)
  function removeVisualIndex() {
    prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = visualLength - 1;//마지막 순번으로 돌리는것 
    }
    slidePrevVisual(prevIndex)
    activateDot(prevIndex)
  }

  gsap.set($visualLi, { left: visualWidth, opacity: 0, scale: 1 })//초기이미지 좌표를 오른쪽으로 빼놓고 작업한다는 전제임
  gsap.set($visualTitle, { bottom: 0, opacity: 0 })

  gsap.set($visualLi[0], { left: 0, opacity: 1, scale: 1 })
  gsap.set($visualTitle[0], { bottom: 100 + 'px', opacity: 1 })

  function overDot() {
    nextIndex = getIndex(this);
    prevIndex= getIndex(this);
    // alert(nextIndex)
    activateDot(nextIndex);
    if (nextIndex != currentIndex && nextIndex > currentIndex) {
      slideNextVisual(nextIndex)
    } else if (nextIndex < currentIndex) {
      slidePrevVisual(prevIndex)
    }
  }

  function getIndex(checkMenu) {
    let selectedIndex = 0;
    while ((checkMenu = checkMenu.previousElementSibling) != null) {
      selectedIndex++
    }
    return selectedIndex;
  }

  function activateDot(index) {
    if (selectedDot != null && selectedDot != $dot[index]) {
      selectedDot.classList.remove('selected')
    }
    if (selectedDot != $dot[index]) {
      selectedDot = $dot[index];
      selectedDot.classList.add('selected')
    }
  }

  function slideNextVisual(index) {
    gsap.to($visualLi[currentIndex], { left: -visualWidth, opacity: 0, duration: 1, ease: 'power1.out' })
    gsap.set($visualTitle[currentIndex], { bottom: 0 + 'px', opacity: 0 })

    gsap.set($visualLi[index], { left: visualWidth, opacity: 0, scale: 1 })//스탠바이 해놓는것
    gsap.set($visualTitle[index], { bottom: 0 + 'px', opacity: 0 })


    gsap.to($visualLi[index], {
      left: 0, opacity: 1, duration: 1, ease: 'power1.out', onComplete: () => {
        gsap.to($visualTitle[index], { bottom: 100 + 'px', opacity: 1, duration: 1, ease: 'power1.out' })
      }
    })
    currentIndex = index;
  }

  function slidePrevVisual(index) {
    gsap.to($visualLi[currentIndex], { left: visualWidth, opacity: 0, duration: 1, ease: 'power1.out' })
    gsap.set($visualTitle[currentIndex], { bottom: 0 + 'px', opacity: 0 })


    gsap.set($visualLi[index], { left: -visualWidth, opacity: 0, scale: 1 })//스탠바이 해놓는것
    gsap.set($visualTitle[index], { bottom: 0 + 'px', opacity: 0 })


    gsap.to($visualLi[index], {
      left: 0, opacity: 1, duration: 1, ease: 'power1.out', onComplete: () => {
        gsap.to($visualTitle[index], { bottom: 100 + 'px', opacity: 1, duration: 1, ease: 'power1.out' })

      }
    })
    currentIndex = index;
  }
})

//3.버튼의 디자인이 바뀌지 않는다.