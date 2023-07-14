/*The code for this javascript is a compound from these sources:
* - Get current URL: https://www.w3schools.com/js/js_window_location.asp
* 
* 
* 
* 
*/
const navLinks = document.querySelectorAll("nav-item") 

navLinks.forEach(navLinks => {
   navLinks.addEventListener("click", () => {
      document.querySelector("active")?.classList.remove("active")
      navLinks.classList.add("active")
   })
})