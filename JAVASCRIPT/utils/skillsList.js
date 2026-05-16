import { skills } from "../data/skills.js";

export default function skillsList(){

    const container = document.querySelector("#skills-container");

    // Si no existe la sección, salir
    if(!container) return;

    // Filtrar skills dominadas
    const skillsDominadas = skills.filter(skill =>
        skill.state === "dominada"
    );

    // Pintar HTML dinámicamente
    container.innerHTML = skillsDominadas.map(skill => `

        <article class="skill-card">

            <img src="${skill.icon}" alt="${skill.name}">

            <h2>${skill.name}</h2>

            <p><strong>Nivel:</strong> ${skill.level}</p>

            <p>${skill.description}</p>

            <div class="tags">

                ${skill.tags.map(tag => `
                    <span>${tag}</span>
                `).join("")}

            </div>

        </article>

    `).join("");

}