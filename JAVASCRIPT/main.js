import { header, footer } from "./templates/template.js";
import menu from "./utils/menu.js";
import darkMode from "./utils/darkMode.js";
import skillsList from "./utils/skillsList.js";
import cheatsheetsList from "./utils/cheatsheetsList.js";
import resourcesGenerator from "./utils/resourcesGenerator.js";
import { getWeather } from "./utils/weather.js";


const headerContainer = document.querySelector("#header");
const footerContainer = document.querySelector("#footer");

if (headerContainer) {
    headerContainer.innerHTML = header;
}

if (footerContainer) {
    footerContainer.innerHTML = footer;
}

// FUNCIONALIDADES
menu();
darkMode();
skillsList();
cheatsheetsList();
resourcesGenerator();
getWeather();
