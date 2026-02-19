const container = document.getElementById("motorcycleContainer");

async function getMotorcycles() {
    try {
        const response = await fetch("data/motorcycles.json");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        displayMotorcycles(data);

    } catch (error) {
        console.error("Fetch error:", error);
    }
}

function displayMotorcycles(bikes) {

    bikes.forEach(bike => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${bike.image}" 
                 alt="${bike.name} motorcycle"
                 loading="lazy"
                 width="400"
                 height="300">

            <h3>${bike.name}</h3>
            <p><strong>Engine:</strong> ${bike.engine}</p>
            <p><strong>Power:</strong> ${bike.power}</p>

            <button>View Details</button>
        `;

        container.appendChild(card);
    });
}

if (container) {
    getMotorcycles();
}
