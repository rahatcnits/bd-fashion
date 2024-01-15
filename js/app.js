// Navbar
const menuBox = document.querySelector(".mobile_menu_item");
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

// product item title animation
const productItemTitle = document.querySelectorAll(".product_item_title");

setInterval(() => {
  productItemTitle.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
}, 5000);

// about section observer
const about = document.querySelector(".about");

const aboutObserver = new IntersectionObserver(
  (items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add("visible");
      } else {
        item.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

aboutObserver.observe(about);

// about section observer
const productMain = document.querySelector(".product_wrapper");

const productMainObserver = new IntersectionObserver(
  (items) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        item.target.classList.add("visible");
      } else {
        item.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

productMainObserver.observe(productMain);

// product section observer
const productCategories = document.querySelectorAll(".product_category");

const observerProductCategory = new IntersectionObserver(
  (productCategories) => {
    productCategories.forEach((productCategory) => {
      if (productCategory.isIntersecting) {
        productCategory.target.classList.add("visible");
      } else {
        productCategory.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

productCategories.forEach((productCategory) => {
  observerProductCategory.observe(productCategory);
});
