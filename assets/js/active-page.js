/*The code for this javascript is a compound from these sources:
* - Get current URL: https://www.w3schools.com/js/js_window_location.asp
* 
* 
* 
* 
*/
var navContainer = document.getElementsByClassName("nav-item");
var navLinks = document.getElementsByClassName("nav-link");

for (var i = 0; i < navLinks.length; i++) {
   navLinks[i].addEventListener("click", function() {
     var current = document.getElementsByClassName("active");

     if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    this.className += " active";
   });
 }
