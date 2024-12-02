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

//collection
var bigcontainer=document.getElementById("bigcontainer")
var smallcontainer=bigcontainer.querySelectorAll("div")
console.log(smallcontainer);
var input=document.getElementById("input")
input.addEventListener("keyup",function(event)
{
 let inputs=event.target.value.toLowerCase()
 console.log(inputs);
 for(i=0;i<smallcontainer.length;i++)
 {
   var text=smallcontainer[i].querySelector("h2").textContent.toLowerCase()
   console.log(text);
   if(text.toLowerCase().indexOf(inputs)<0)
   {
    smallcontainer[i].style.display="none"
   }
   else{
    smallcontainer[i].style.display="block"
   }
   
 }
 
}
)