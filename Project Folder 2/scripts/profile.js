// Fetch employee data from localStorage
const employee = JSON.parse(localStorage.getItem('currentEmployee'));

if (employee) {
    document.getElementById('employee-username').innerText = employee.username;
    document.getElementById('employee-department').innerText = employee.department;
    document.getElementById('employee-project').innerText = employee.project;
    document.getElementById('employee-email').innerText = employee.email;
    document.getElementById('employee-phone').innerText = employee.phone;
} else {
    // Redirect to login if no employee is found
    window.location.href = 'login.html';
}

// Logout functionality
document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('currentEmployee');
    window.location.href = 'login.html';
});
