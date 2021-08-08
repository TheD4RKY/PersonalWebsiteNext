window.onscroll = function () { stickyy() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyy() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}