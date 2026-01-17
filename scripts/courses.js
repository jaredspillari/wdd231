/* ============================
   Course List Array
============================ */
const courses = [
    { code: "WDD 130", title: "Web Development Fundamentals", credits: 3, category: "WDD", completed: true },
    { code: "WDD 140", title: "Advanced Web Development", credits: 3, category: "WDD", completed: false },
    { code: "CSE 110", title: "Intro to Programming", credits: 4, category: "CSE", completed: true },
    { code: "CSE 210", title: "Programming with Classes", credits: 3, category: "CSE", completed: false }
];

/* ============================
   Display Courses Dynamically
============================ */
const coursesContainer = document.getElementById("courses");
const totalCredits = document.getElementById("totalCredits");

function displayCourses(filter = "all") {
    let filteredCourses;

    if (filter === "all") {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.category.toLowerCase() === filter.toLowerCase());
    }

    // Limpiar contenedor
    coursesContainer.innerHTML = "";

    // Crear cards
    filteredCourses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("card");
        if (course.completed) {
            courseCard.classList.add("completed"); // Clase CSS para cursos completados
        }

        courseCard.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
            <p>Category: ${course.category}</p>
        `;

        coursesContainer.appendChild(courseCard);
    });

    // Calcular total créditos
    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    totalCredits.textContent = `Total Credits: ${total}`;
}

/* ============================
   Filter Buttons
============================ */
document.getElementById("all").addEventListener("click", () => displayCourses("all"));
document.getElementById("wdd").addEventListener("click", () => displayCourses("WDD"));
document.getElementById("cse").addEventListener("click", () => displayCourses("CSE"));

/* ============================
   Inicializar
============================ */
displayCourses();
