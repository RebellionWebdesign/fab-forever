const mobileToggleOpen = document.getElementsByClassName("mobile--open")[0]
const mobileToggleClose = document.getElementsByClassName("mobile--close")[0]
const navBar = document.getElementsByClassName("headerbar__nav")[0]


mobileToggleOpen.addEventListener("click", () => {
    navBar.classList.remove("closed")
    navBar.classList.add("open")
})

mobileToggleClose.addEventListener("click", () => {
    navBar.classList.remove("open")
    navBar.classList.add("closed")
})