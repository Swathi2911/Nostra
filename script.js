// Open and close side navbar
var sideNavMenu = document.getElementById("side-navbar-activate");
var sideNavBar = document.querySelector(".side-navbar");
var sideNavClose = document.getElementById("side-navbar-close");

sideNavMenu.addEventListener("click", function () {
    sideNavBar.style.marginLeft = "0px";
});

sideNavClose.addEventListener("click", function () {
    sideNavBar.style.marginLeft = "-60%";
});

// Hide signup text
let closeButton = document.getElementById("close");
let signupText = document.querySelector(".signup");

if (closeButton) {
    closeButton.addEventListener("click", function () {
        signupText.style.display = "none";
    });
}

// Slider navigation logic
var sliderLeftButton = document.getElementById("slider-left-activate");
var sliderRightButton = document.getElementById("slider-right-activate");
var sliderImage = document.querySelector(".slide-image");
var sliderMargin = 0;

// Move slider to the right
sliderRightButton.addEventListener("click", function () {
    sliderMargin += 100;

    if (sliderMargin > 200) {
        sliderMargin = 0; 
    }

    sliderImage.style.marginLeft = `-${sliderMargin}vw`;
});

// Move slider to the left
sliderLeftButton.addEventListener("click", function () {
    if (sliderMargin === 0) {
        sliderMargin = 200;
    } else {
        sliderMargin -= 100;
    }

    sliderImage.style.marginLeft = `-${sliderMargin}vw`;
});
