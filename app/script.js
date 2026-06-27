// MOBILE MENU TOGGLE

const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    // CHANGE ICON
    if(menuIcon.classList.contains("fa-bars")){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }

});

// CLOSE MENU WHEN CLICKING LINKS

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});

// BUTTON ACTIONS

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert(button.innerText + " button clicked!");

    });

});

// GITHUB BUTTON

const githubBtn = document.querySelector(".visit-btn");

githubBtn.addEventListener("click", () => {

    window.open("https://github.com/", "_blank");

});

// SMOOTH HEADER SHADOW ON SCROLL

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }

});