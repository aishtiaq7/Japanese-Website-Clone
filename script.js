AOS.init();
//USING A NEW LIBRARY 



const standoutText = document.querySelector('#standout');


console.log(standoutText);


document.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });
  
  document.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
  });