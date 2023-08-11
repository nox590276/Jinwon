document.addEventListener('DOMContentLoaded',()=>{
  const $leftButton=document.querySelector('.major.left');
  const $rightButton=document.querySelector('.major.right');
  const $mainMajorImg=document.querySelectorAll('#mainmajor_img>li');
  const $mainMajorImgBox=document.querySelector('#mainmajor_img');
  let imgSize=370;
  let imgMarginSize=45;

  $leftButton.addEventListener('click',prevImg);
  $rightButton.addEventListener('click',nextImg);
  gsap.set($mainMajorImgBox,{left:0})

  function nextImg(){
    gsap.to($mainMajorImgBox,{left:-415+'px'})
  }
  function prevImg(){
    gsap.to($mainMajorImgBox,{left:0+'px'})
  }
  // function nextImg(){s
  //   for(let currentIndex=;currentIndex<=2;currentIndex++){
  //     gsap.to($mainMajorImg[currentIndex],{left:imgSize+imgMarginSize})
  //   }
  // }
  //  JavaScript로 이미지 슬라이드 기능 추가
  // const images = document.querySelectorAll('#mainmajor_img li');
  // let currentIndex = 0;

  // // 이전 버튼 클릭 시
  // document.querySelector('.left.major').addEventListener('click', () => {
  //   images[currentIndex].classList.remove('visible');
  //   currentIndex = (currentIndex - 1 + images.length) % images.length;
  //   images[currentIndex].classList.add('visible');
  // });

  // // 다음 버튼 클릭 시
  // document.querySelector('.right.major').addEventListener('click', () => {
  //   images[currentIndex].classList.remove('visible');
  //   currentIndex = (currentIndex + 1) % images.length;
  //   images[currentIndex].classList.add('visible');
  // });

})