/*The code for this javascript is a compound from these sources:
* - Get current URL: https://www.w3schools.com/js/js_window_location.asp
* 
* 
* 
* 
*/
const navItems = document.getElementsByClassName("nav-item")[0]
navItems.addEventListener("click", () => {
   navItems.classList.add("active")
})

