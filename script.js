const menuButton = document.getElementById("menu-mobile");
const menuLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    menuLinks.classList.toggle("ativo");
});

const links = menuLinks.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.classList.remove("ativo");
    });
});