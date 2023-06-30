const mobileToggleOpen = document.getElementsByClassName("headerbar__mobile")[0]
const mobileToggleClose = document.getElementsByClassName("headerbar__mobile--close")[0]
const navBar = document.getElementsByClassName("headerbar__nav")[0]


mobileToggleOpen.addEventListener("click", () => {
    navBar.classList.remove("closed")
    navBar.classList.add("open")
})

mobileToggleClose.addEventListener("click", () => {
    navBar.classList.remove("open")
    navBar.classList.add("closed")
})