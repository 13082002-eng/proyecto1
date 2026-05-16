export default function menu() {

    const hamburguesa = document.querySelector(".hamburguesa");
    const navLinks = document.querySelector(".nav-links");

    hamburguesa.addEventListener("click", () => {
        hamburguesa.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

}