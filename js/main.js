var swiper = new Swiper('#reactjs_projects', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      // clickable: true,
      // dynamicBullets: true,
      type: 'fraction',
    },

   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    }
  });


const navbar = document.getElementById("navbar")
const headerarea = document.getElementById("header-area")
window.onscroll = function () {
  if(headerarea.offsetHeight - 5 < window.pageYOffset) {
    navbar.style.backgroundColor="#013e5f"
    navbar.style.color="#000"
  } else {
    navbar.style.backgroundColor="transparent"
    navbar.style.color="#fff"
  }
}



// Navbar Toggling
document.getElementById("nav-btn")
.addEventListener('click', (e)=>{
  document.getElementById("nav").classList.toggle('show-nav') 
})

document.querySelectorAll("a").forEach((a)=>{
  a.addEventListener('click', (e)=>{
    document.getElementById("nav").classList.remove('show-nav') 
  })
})
