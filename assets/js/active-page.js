/*The code for this javascript is a compound from these sources:
* - Get current URL: https://www.w3schools.com/js/js_window_location.asp
* 
* 
* 
* 
*/
 document.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll('.nav-link').addEventListener('click', function(event) {
      event.preventDefault();
      var target = document.querySelector('.nav-link');
      if (target.classList.contains('active')) {
        target.classList.remove('active');
      } else {
        target.classList.add('active');
      }
    });
 });
