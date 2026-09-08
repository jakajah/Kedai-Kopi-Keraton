// Toggle class active untuk navbar dan humburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika humburger menu di klik
document.querySelector("#humburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
}

// klik diluar sidebar untuk menghilangkan navbar
const humburger = document.querySelector("#humburger-menu");

document.addEventListener("click", (e) => {
    if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
}); 