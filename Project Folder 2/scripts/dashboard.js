// scripts/dashboard.js

// Sample data for demonstration (replace with dynamic data or fetch from backend)
const employeeData = {
    username: 'JohnDoe123',
    points: 1500
};

// Function to display employee information
function displayEmployeeInfo() {
    const usernameElement = document.getElementById('employee-username');
    const pointsElement = document.getElementById('employee-points');
    const welcomeMessageElement = document.getElementById('welcome-message');

    if (employeeData) {
        // Update DOM elements with employee data
        usernameElement.textContent = employeeData.username;
        pointsElement.textContent = employeeData.points;

        // Customize the welcome message
        welcomeMessageElement.textContent = `Welcome, ${employeeData.username}`;
    } else {
        welcomeMessageElement.textContent = 'Welcome, Guest';
        usernameElement.textContent = 'N/A';
        pointsElement.textContent = '0';
    }
}

// Function to handle logout (redirect or clear session)
function handleLogout() {
    // Simulate logout by redirecting to a login page
    window.location.href = 'login.html'; // Replace with actual logout logic (e.g., clearing tokens)
}

// Event listener for the logout button
document.getElementById('logout').addEventListener('click', function (e) {
    e.preventDefault();
    handleLogout();
});

// Initialize the dashboard (runs when the page loads)
document.addEventListener('DOMContentLoaded', function () {
    displayEmployeeInfo();
});
