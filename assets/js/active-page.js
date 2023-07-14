/*The code for this javascript is a direct copy and paste from this tutorial:
* https://www.tutorialspoint.com/how-to-make-active-tab-in-navigation-menu-using-html-css-and-javascript
* What it does? In line 10 it declares the variable navItems to select the value nav-item from the class list
* in the html file. The for function states the variable i to be 0 and as long as the length (numbero of items) of the variable navItems
* is greater than i=0 i should be increased by one until it is the same. The last step is to add the event listener click which adds
* the active class to the selected element.
*/
var navItems = document.getElementsByClassName("nav-item");
for (var i = 0; i < navItems.length; i++) {
   navItems[i].addEventListener("click", function() {
      this.classList.add("active");
   });
}