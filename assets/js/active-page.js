/*The code for this javascript is a compound from these sources:
* - Get current URL: https://www.w3schools.com/js/js_window_location.asp
* 
* 
* 
* 
*/
const activePage = window.location.pathname
const navLinks = querySelectorAll("nav a").
forEach(link => {
   if (link.href.includes(`${activePage}`)) {
      link.classList.add("active")
   }
})

