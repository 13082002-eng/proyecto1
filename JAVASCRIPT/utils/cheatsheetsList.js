import { cheatsheets } from "../data/cheatsheets.js";

export default function cheatsheetsList(){

    const container = document.querySelector("#cheatsheets-container");

    if(!container) return;

    container.innerHTML = cheatsheets.map(sheet => `

        <a href="${sheet.link}" class="cheatsheet-card">

            <img src="${sheet.icon}" alt="${sheet.name}">

            <h2>${sheet.name}</h2>

            <p>Guía rápida de ${sheet.name}</p>

        </a>

    `).join("");

}