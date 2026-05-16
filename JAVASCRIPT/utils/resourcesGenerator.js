import { resources } from "../data/resources.js";

export default function resourcesGenerator(){

    const container =
        document.querySelector("#resources-container");

    const tabs =
        document.querySelectorAll(".tab");

    // Si no existe recursos.html, salir
    if(!container || !tabs.length) return;

    // Función render
    function renderResources(category){

container.innerHTML =
    resources[category]
    .map(resource => `

        <a
            href="${resource.url}"
            target="_blank"
            rel="noopener noreferrer"
            class="resource-card"
        >

            <h3>${resource.name}</h3>

            <p class="resource-note">
                ${resource.note}
            </p>


        </a>

    `)
    .join("");
    }

    // Mostrar primera tab
    renderResources("documentacion");

    // Eventos tabs
    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            // quitar active
            tabs.forEach(btn =>
                btn.classList.remove("active")
            );

            // activar tab actual
            tab.classList.add("active");

            // renderizar categoría
            renderResources(tab.dataset.tab);

        });

    });

}

