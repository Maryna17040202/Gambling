let hamb = document.querySelector(".hamb");
let navMenu = document.querySelector("nav");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active")
}

let btnLanguage = document.querySelector(".btn-language");
let btnNone = document.querySelector(".none")
btnLanguage.addEventListener("click", language);

function language() {
    let x = btnLanguage.innerText;
    console.log(x);
    if (btnLanguage.innerText == "EN") {
       btnLanguage.innerText = "RU"
    }
    else {
        btnLanguage.innerText = "EN"
    }
}
