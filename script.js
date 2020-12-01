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
   offset: 10, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 350, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: false, // whether animation should happen only once - while scrolling down
   mirror: true, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

const slideShow = document.querySelector('.slideShow');
const slides = document.querySelectorAll('.slide');

// const middleBlock = document.querySelectorAll('.middle-block');
// const slidesContainer = document.querySelector('.slides-container');
const middleBlock = document.querySelector('.middle-block');
const slide = document.querySelectorAll('.slide');
console.log(slide);
// console.log(slidesContainer);
// console.log(middleBlock);

window.addEventListener('DOMContentLoaded', ()=>{
   
   setupSlideShow();




   //SetupTabSection--------------------------------------------------------

   middleBlock.addEventListener('click', e =>{
      // console.log('clicked on :');
      // console.log(e.target);

      const id = e.target.dataset.revid;
      if( id ){ //only when button is clicked
         console.log('id:' + id);
         
         slide.forEach( (item, slideIndex) =>{
            console.log(item);
            console.log('  itemIndex:' + slideIndex);

            //removing all slides
            if(item.classList.contains('show-slide')){
               console.log('___removing slideIndex:' +slideIndex);
               item.classList.remove('show-slide');
            }

            //show slide you clicked on
            const slideID = `.slide${id}`;
            const revealSlide = document.querySelector(slideID);
            console.log('** you found:');
            console.log(revealSlide);
            
            revealSlide.classList.add('show-slide');

            console.log('________________________________')

         });



      }

   });

   

});




   //GLOBAL SCROLL EVENT
window.addEventListener('scroll', () => {

   const aboutTextDiv = document.querySelector('#about-text');
   const distance = window.scrollY;
   // console.log(`distance: ${distance}`);
   document.querySelector("#about-text").style.transform = `translateY(${distance * -0.44}px)`;
   document.querySelector(".about-img").style.transform = `translateY(${distance * -0.15}px)`;

})

window.addEventListener('load', () =>{
   alert("******EVERYTHING LOADED******"); 
});



function changeImageSrc(slideNumber) {
   var destination = `./images/banner0${slideNumber}_desk.png`;
   slideShow.setAttribute('src', destination)
}
function setupSlideShow(){
   
   var imageIndex =2; // 0 to 4; 
   setInterval( () =>{
      changeImageSrc(imageIndex);
      imageIndex++;
      if (imageIndex >4){
         imageIndex= 1;
      }
   }, 4000)

}

