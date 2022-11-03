console.log("Cześć!");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let zdjecie = document.querySelector(".zdjecie");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");
let listItem = document.querySelector(".listItem");

button1.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
});

button2.addEventListener("click", () => {
    zdjecie.remove();
});