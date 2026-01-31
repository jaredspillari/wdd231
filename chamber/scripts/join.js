// ================================
// JOIN PAGE SCRIPT
// ================================

// Set timestamp when page loads
const timestampField = document.querySelector("#timestamp");

if (timestampField) {
    const now = new Date();
    timestampField.value = now.toISOString();
}

// Optional: improve keyboard accessibility for dialogs
const dialogs = document.querySelectorAll("dialog");

dialogs.forEach(dialog => {
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
});
