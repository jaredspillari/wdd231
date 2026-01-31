const apiKey = "5d4100c59b706239c4572fbd7e1b6692";
const lat = 14.6349; // Guatemala City
const lon = -90.5069;

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        document.querySelector("#current-temp").textContent =
            `Temperature: ${data.list[0].main.temp} °F`;

        document.querySelector("#weather-desc").textContent =
            data.list[0].weather[0].description;

        const forecastDiv = document.querySelector("#forecast");
        forecastDiv.innerHTML = "";

        const days = data.list
            .filter(item => item.dt_txt.includes("12:00:00"))
            .slice(0, 3);

        days.forEach(day => {
            const p = document.createElement("p");
            p.textContent = `${new Date(day.dt_txt).toLocaleDateString()}: ${day.main.temp} °F`;
            forecastDiv.appendChild(p);
        });

    } catch (error) {
        console.error("Weather error:", error);
    }
}

getWeather();
