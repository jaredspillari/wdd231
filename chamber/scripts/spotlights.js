const dataURL = "data/members.json";
const container = document.querySelector("#spotlight-cards");

async function loadSpotlights() {
    const response = await fetch(dataURL);
    const data = await response.json();

    const eligible = data.members.filter(
        m => m.membership === "Gold" || m.membership === "Silver"
    );

    const selected = eligible.sort(() => 0.5 - Math.random()).slice(0, 3);

    selected.forEach(member => {
        const card = document.createElement("section");
        card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.image}" alt="${member.name} logo">
      <p>${member.phone}</p>
      <p>${member.address}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p><strong>${member.membership}</strong></p>
    `;
        container.appendChild(card);
    });
}

loadSpotlights();
