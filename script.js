//USING A NEW LIBRARY 
AOS.init({
   // Global settings:
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   initClassName: 'aos-init', // class applied after initialization
   animatedClassName: 'aos-animate', // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
   
 
   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 120, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 350, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: false, // whether animation should happen only once - while scrolling down
   mirror: true, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

const slideShow = document.querySelector('.slideShow');
console.log(slideShow);


// Apply header-shifting images:
window.addEventListener('DOMContentLoaded', ()=>{
   

  
   var imageIndex =1; // 0 to 4; 
   setInterval( () =>{
      changeImageSrc(imageIndex);
      imageIndex++;
      if (imageIndex >4){
         imageIndex= 1;
      }
   }, 3000)


});

function changeImageSrc(slideNumber) {
      
   // console.log(`slideNumber = ${slideNumber}`);
   // <img class="slideShow" src="./images/banner01_desk.png" alt="alt shifting-background img1">
   var destination = `./images/banner0${slideNumber}_desk.png`;
   // console.log(`destination = ${destination}`);

   // var index = slideNumber - 1;

   // slideShow[index].classList.add('hide');

   slideShow.setAttribute('src', destination)


   // slideShow.classList.toggle('imgAnimation');

   

}