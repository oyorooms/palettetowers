let getBtn = document.querySelector('#getBtn');
let getBtnSticky = document.querySelector('#getBtnSticky')
let getForm = document.querySelector('.submitform');
let closeFormBtn = document.querySelector('#closeFormBtn');
let body = document.querySelector('body')
let formOverlay = document.querySelector('#formOverlay')

let formShow=()=>{
    getForm.classList.add('rightBoxFormShow');
    formOverlay.style.display='block';
}
let formClose=()=>{
    getForm.classList.remove('rightBoxFormShow');
    formOverlay.style.display='none';
}

getBtn.addEventListener('click',formShow);
getBtnSticky.addEventListener('click',formShow);
closeFormBtn.addEventListener('click',formClose);


let locationCenteral= document.querySelector('#location-centeral');
let locIcon = document.querySelector('#location-centeral img');
let interiors= document.querySelector('#interiors');
let panoramic= document.querySelector('#panoramic');
let amenities= document.querySelector('#amenities');

let contentOne= document.querySelector('#tabcontentOne');
let contentTwo= document.querySelector('#tabcontentTwo');
let contentThree= document.querySelector('#tabcontentThree');
let contentFour= document.querySelector('#tabcontentFour');



locationCenteral.addEventListener('mouseover',()=>{
    contentOne.style.display = "block";
    contentTwo.style.display = "none";
    contentThree.style.display = "none";
    contentFour.style.display = "none";
})
interiors.addEventListener('mouseover',()=>{
    locationCenteral.classList.remove('tabActive')
    locIcon.classList.remove('tabActiveImg')
    contentOne.style.display = "none";
    contentTwo.style.display = "block";
    contentThree.style.display = "none";
    contentFour.style.display = "none";
})
panoramic.addEventListener('mouseover',()=>{
    locationCenteral.classList.remove('tabActive')
    locIcon.classList.remove('tabActiveImg')
    contentOne.style.display = "none";
    contentTwo.style.display = "none";
    contentThree.style.display = "block";
    contentFour.style.display = "none";
})
amenities.addEventListener('mouseover',()=>{
    locationCenteral.classList.remove('tabActive')
    locIcon.classList.remove('tabActiveImg')
    contentOne.style.display = "none";
    contentTwo.style.display = "none";
    contentThree.style.display = "none";
    contentFour.style.display = "block";
})


$(document).ready(function(){
    var perfectPalette= $('#perfectPalette');
    var featuredAmenities= $('#featuredAmenities');
    var experienceCity= $('#experienceCity');
    var perfectAccommodation= $('#perfectAccommodation');


    TouchpadScrollCarousel({
        carouselSelector: "#perfectPalette",
        gap: 10,
        showScrollbar: false,
		mouseDrag: true,
        responsive: [
          {
            breakpoint: 320,
            slidesToShow: 1.3,
            gap: 10,
          },
          {
            breakpoint: 1200,
            slidesToShow: 2,
            gap: 30,
          },
        ],
      });

       TouchpadScrollCarousel({
        carouselSelector: "#featuredAmenities",
        gap: 10,
        showScrollbar: false,
		mouseDrag: true,
        responsive: [
          {
            breakpoint: 320,
            slidesToShow: 2.2,
            gap: 10,
          },
          {
            breakpoint: 1200,
            slidesToShow: 4,
            gap: 20,
          },
        ],
      });

      
      TouchpadScrollCarousel({
        carouselSelector: "#experienceCity",
        gap: 10,
        showScrollbar: false,
		mouseDrag: true,
        responsive: [
          {
            breakpoint: 320,
            slidesToShow: 1.3,
            gap: 10,
          },
          {
            breakpoint: 1200,
            slidesToShow: 2,
            gap: 30,
          },
        ],
      });

      TouchpadScrollCarousel({
        carouselSelector: "#perfectAccommodation",
        gap: 10,
        showScrollbar: false,
		mouseDrag: true,
        responsive: [
          {
            breakpoint: 320,
            slidesToShow: 1.3,
            gap: 10,
          },
          {
            breakpoint: 1200,
            slidesToShow: 4.3,
            gap: 12,
          },
        ],
      });

      TouchpadScrollCarousel({
        carouselSelector: "#exploreCollection",
        gap: 10,
        showScrollbar: false,
		mouseDrag: true,
        responsive: [
          {
            breakpoint: 320,
            slidesToShow: 1.3,
            gap: 10,
          },
          {
            breakpoint: 1200,
            slidesToShow: 4.3,
            gap: 12,
          },
        ],
      });

      

     

      /*
    perfectPalette.owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        nav: true,
        dots: true,
        // autoplay:true,
        // autoplayTimeout:1000,
        responsive:{
            0:{
                items:1.2
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
    */

   

 
//     experienceCity.owlCarousel({
//         loop:false,
//        margin:20,
//        nav:true,
//        // autoplay:true,
//        autoplayTimeout:2000,
//        responsive:{
//            0:{
//                items:1.2
//            },
//            600:{
//                items:4
//            },
//            1000:{
//                items:4
//            }
//        }
//    });
  
  });

 


  // let bookingBtn = document.querySelector('#bookingBtn');
  // let mainHeader = document.querySelector('#mainHeader');
  // const sticky = (mainHeader.offsetTop+90);

  // //console.log(sticky)

  // window.addEventListener('scroll', ()=>{
  //   if(window.pageYOffset > sticky){
  //      mainHeader.classList.add('sticky');
  //     //  bookingBtn.style.visibility='visible';
  //   }
  //   else{
  //       mainHeader.classList.remove('sticky');
  //       // bookingBtn.style.visibility='hidden';
  //   }
  // })

  let stickyHeader = document.querySelector('#stickyHeader');
  let mainHeader = document.querySelector('#mainHeader');
  
  const sticky = (mainHeader.offsetTop+90);

console.log(sticky)

  window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > sticky){
      //  mainHeader.classList.add('sticky');
      //  bookingBtn.style.visibility='visible';
      mainHeader.style. visibility="hidden";
      stickyHeader.style.display='flex';
    }
    else{
        // mainHeader.classList.remove('sticky');
        // bookingBtn.style.visibility='hidden';
        // mainHeader.style.display='flex';
        mainHeader.style.visibility='visible';
      stickyHeader.style.display='none';
    }
  })
