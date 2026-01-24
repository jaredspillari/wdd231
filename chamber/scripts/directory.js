const directory = document.querySelector("#directory");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const dataURL = "data/members.json";

// Fetch data
async function getMembers() {
    const response = await fetch(dataURL);
    const data = await response.json();
    displayMembers(data.members);
}

function displayMembers(members) {
    directory.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        const img = document.createElement("img");
        img.src = `images/${member.image}`;
        img.alt = `${member.name} logo`;
        img.loading = "lazy";

        const name = document.createElement("h3");
        name.textContent = member.name;

        const address = document.createElement("p");
        address.textContent = member.address;

        const phone = document.createElement("p");
        phone.textContent = member.phone;

        const link = document.createElement("a");
        link.href = member.website;
        link.textContent = member.website;
        link.target = "_blank";

        card.append(img, name, address, phone, link);
        directory.appendChild(card);
    });
}

// Toggle views
gridButton.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
});

listButton.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
});

getMembers();
