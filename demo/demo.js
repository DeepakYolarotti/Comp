document.addEventListener('DOMContentLoaded', function () {
    var loginBtn = document.getElementById('loginBtn');
    var loginPopup = document.getElementById('loginPopup');
    var closeBtn = document.getElementById('closeBtn');

    loginBtn.addEventListener('click', function () {
        loginPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        loginPopup.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == loginPopup) {
            loginPopup.style.display = 'none';
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const loginPopup = document.getElementById("loginPopup");
    const closeBtn = document.getElementById("closeBtn");
    const loginForm = document.getElementById("loginForm");

    // Show login popup when login button is clicked
    loginBtn.addEventListener("click", function(event) {
        event.preventDefault();
        loginPopup.style.display = "block";
    });

    // Close login popup when close button is clicked
    closeBtn.addEventListener("click", function() {
        loginPopup.style.display = "none";
    });

    // Handle form submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const password = document.getElementById("passwordInput").value.trim();
        
        // Check if password is 5 characters
        if (password.length === 5) {
            // Redirect to the new page
            window.location.href = "select_file.html"; // Change to the appropriate page
        } else {
            // Display login failed message
            alert("Login failed. Please try again.");
        }
    });
});
  


