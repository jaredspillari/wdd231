const dataURL = "data/members.json";


async function loadSpotlights() {
    const container = document.querySelector("#spotlight-cards");
    const response = await fetch(dataURL);
    const data = await response.json();

    const eligible = data.members.filter(
        m => m.membership === 3 || m.membership === 2
    );

    const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

    function getMembershipLevel(level) {
        if (level === 3) return "Gold";
        if (level === 2) return "Silver";
        return "Bronze";
    }

    selected.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="images/${member.image}" alt="${member.name} logo">
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p><strong>${getMembershipLevel(member.membership)}</strong></p>
    `;
        container.appendChild(card);
    });
}

loadSpotlights();
