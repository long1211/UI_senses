$(document).ready(function () {
  // Loading animation

  $(window).on("load", function () {
    setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
  });
  function removeLoader() {
    $("#loadingDiv").fadeOut(500, function () {
      // fadeOut complete. Remove the loading div
      $("#loadingDiv").remove(); //makes page more lightweight
    });
  }

  $(".box_clients").slick({
    dots: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 620,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
    ],
  });

  $(".menu-toggle").click(function () {
    $("nav").toggleClass("active");
  });
});

// ==============  Modal ==================
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// ============================  Header Sticky ============================

window.onscroll = function () {
  myFunction();
  myFunctionMB();
};

const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// =====================  MB header=============================

const headerMB = document.getElementById("myHeaderMB");
const stickyMB = headerMB.offsetTop;

function myFunctionMB() {
  if (window.pageYOffset > stickyMB) {
    headerMB.classList.add("stickyMB");
  } else {
    headerMB.classList.remove("stickyMB");
  }
}

// ======================== Tabs ==========================
const tabLinks = document.querySelectorAll(".tablinks");
const tabContent = document.querySelectorAll(".wrapper_work_event");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  let btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
  let work = btn.dataset.work; // lấy giá trị trong data-work

  tabContent.forEach(function (el) {
    el.classList.remove("active");
  }); //lặp qua các tab content để remove class active

  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  }); //lặp qua các tab links để remove class active

  document.querySelector("#" + work).classList.add("active");
  // trả về phần tử đầu tiên có id="" được add class active

  btn.classList.add("active");
  // các button mà chúng ta click vào sẽ được add class active
}
