// Navbar
const menuBox = document.querySelector(".menu-item");
const navOpenBtn = document.querySelector(".nav-open");
const closeBtn = document.querySelector(".close-btn");

navOpenBtn.addEventListener("click", () => {
  menuBox.style.left = "0px";
  navOpenBtn.style.opacity = "0";
});

closeBtn.addEventListener("click", () => {
  menuBox.style.left = "-100%";
  navOpenBtn.style.opacity = "1";
});

// when scroll to change navbar bg color
const navbar = document.querySelector(".navbar_wrapper");
window.onscroll = () => {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};

// hero slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
});
