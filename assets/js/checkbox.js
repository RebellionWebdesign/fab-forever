function validate() {
    if (document.getElementsByClassName("newsletter").checked) {
        localStorage-setItem("isChecked", "yes")
    }
}