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