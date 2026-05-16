export default function darkMode(){

    const botonModo = document.querySelector(".dark-mode-btn");

    // Revisar si había un tema guardado
    const temaGuardado = localStorage.getItem("theme");

    // Si era oscuro, aplicarlo al cargar
    if(temaGuardado === "dark"){
        document.body.classList.add("dark-mode");
        botonModo.textContent = "☼";
    }

    botonModo.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        // Si está oscuro
        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("theme", "dark");
            botonModo.textContent = "☼";

        } else {

            localStorage.setItem("theme", "light");
            botonModo.textContent = "☾";
        }

    });

}