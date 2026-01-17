const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");

    // Accesibilidad
    const isOpen = navigation.classList.contains("show");
    hamburger.setAttribute("aria-expanded", isOpen);
});