import { places } from "../data/places.mjs";

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".discover-grid");

    places.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
                <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button>Learn More</button>
        `;

        container.appendChild(card);
    });

    // 🔹 LOCAL STORAGE VISIT MESSAGE

    const visitMessage = document.getElementById("visit-message");

    const lastVisit = Number(localStorage.getItem("lastVisit"));
    const currentDate = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysBetween = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysBetween < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysBetween === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentDate);

});
