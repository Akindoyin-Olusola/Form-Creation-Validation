// Wrap all code inside DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {

    // Form Selection implementation
    const form = document.getElementById("registration-form");

    // Feedback Div Selection
    const feedbackDiv = document.getElementById("form-feedback");

    // Form submit event
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting

        // Retrieve User Inputs implementation
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        let messages = [];

        // Validation of the username input
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Validation of the email input
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Validation of the password input
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Feedback Display Logic
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});
