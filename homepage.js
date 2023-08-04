$(document).ready(function(){
    $('.carousel').carousel({
      interval: 3000
    })
  }); 

 window.onscroll = function() {
 	myScroll()
 };
 var navbar = document.getElementById("navbar");
 var sticky = navbar.offsetTop;
 
 function myScroll() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } 
  else {
    navbar.classList.remove("sticky");
  }
}
