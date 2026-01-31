const params = new URLSearchParams(window.location.search);

function display(id, param) {
    const element = document.getElementById(id);
    if (element && params.has(param)) {
        element.textContent = params.get(param);
    }
}

display("fname", "fname");
display("lname", "lname");
display("email", "email");
display("phone", "phone");
display("business", "business");
display("timestamp", "timestamp");
