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

// Choose Image animation
const chooseImg = document.querySelector(".chose_img_wrapper");

setInterval(() => {
  if (chooseImg.classList.contains("active")) {
    chooseImg.classList.remove("active");
  } else {
    chooseImg.classList.add("active");
  }
}, 5000);

// about section observer
const about = document.querySelector(".about");

const aboutObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

aboutObserver.observe(about);

// product section observer
const productMain = document.querySelector(".product_wrapper");

const productMainObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

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
  }
);

productCategories.forEach((productCategory) => {
  observerProductCategory.observe(productCategory);
});

// work section observer
const work = document.querySelector(".working_process");

const workObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

workObserver.observe(work);

// service section observer
const service = document.querySelector(".service");

const serviceObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

serviceObserver.observe(service);

// chose section observer
const chose = document.querySelector(".chose");

const choseObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

choseObserver.observe(chose);

// showroom section observer
const showroom = document.querySelector(".showroom");

const showroomObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

showroomObserver.observe(showroom);

// sampleroom section observer
const sampleroom = document.querySelector(".sampleroom");

const sampleroomObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

sampleroomObserver.observe(sampleroom);

// management section observer
const management = document.querySelector(".management");

const managementObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

managementObserver.observe(management);

// strength section observer
const strength = document.querySelector(".strength");

const strengthObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

strengthObserver.observe(strength);

// merchandesign section observer
const merchandesign = document.querySelector(".merchandesign");

const merchandesignObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

merchandesignObserver.observe(merchandesign);

// commercial section observer
const commercial = document.querySelector(".commercial");

const commercialObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

commercialObserver.observe(commercial);

// qualityControl section observer
const qualityControl = document.querySelector(".qualityControl");

const qualityControlObserver = new IntersectionObserver((items) => {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("visible");
    } else {
      item.target.classList.remove("visible");
    }
  });
});

qualityControlObserver.observe(qualityControl);

//Get the button:
mybutton = document.getElementById("bt-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    mybutton.style.display = "block";
    mybutton.style.zIndex = 100;
  } else {
    mybutton.style.display = "none";
  }
}
