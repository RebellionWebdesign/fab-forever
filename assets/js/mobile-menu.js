//Define the variables mobileToggleOpen (the hamburger menu), mobileToggleClose (the close icon) and navBar (the complete navbar)
//as constant values. The right side reads: in the document find the element which has (classname) assigned.
const mobileToggleOpen = document.getElementsByClassName("mobile--open")[0]
const mobileToggleClose = document.getElementsByClassName("mobile--close")[0]
const navBar = document.getElementsByClassName("column-2__nav--mobile")[0]

//Here we add an event listener to the burger icon which gets triggered when the icon is clicked. Then it should run any function.
//We have defined here that the script should get the class list of the navBar and that it must remove the closed class,
//which is the default assigned class. Once this is done it should add the class open and the sidebar menu will appear.
mobileToggleOpen.addEventListener("click", () => {
    navBar.classList.remove("closed")
    navBar.classList.add("open")
})

//This does exactly the same as above, only with the close icon inside the sidebar and of course the other way around.
mobileToggleClose.addEventListener("click", () => {
    navBar.classList.remove("open")
    navBar.classList.add("closed")
})