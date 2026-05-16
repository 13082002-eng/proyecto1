export const getWeather = () => {

    const weatherContainer = document.querySelector(".weather-widget");

    if (!weatherContainer) return;

    navigator.geolocation.getCurrentPosition(async (position) => {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const apiKey = "ae36d83cfefe461791795445262704";

        try {

            const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&lang=es`
            );

            const data = await response.json();

            weatherContainer.innerHTML = `
                <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}">
                <div class="weather-info">
                    <span>${Math.round(data.current.temp_c)}°C</span>
                    <p>${data.location.name}</p>
                </div>
            `;

        } catch (error) {
            console.error("Error obteniendo clima:", error);
        }

    });
};