// Static list of employees for demo purposes
const employees = [
    {
        username: 'john',
        password: 'john123',
        points: 85,
        department: 'IT',
        project: 'Website Redesign',
        email: 'john@example.com',
        phone: '123-456-7890'
    },
    {
        username: 'jane',
        password: 'jane123',
        points: 92,
        department: 'HR',
        project: 'Recruitment Drive',
        email: 'jane@example.com',
        phone: '098-765-4321'
    },
    {
        username: 'mike',
        password: 'mike123',
        points: 76,
        department: 'Finance',
        project: 'Budget Planning',
        email: 'mike@example.com',
        phone: '987-654-3210'
    }
];

// Hide the error message initially
document.getElementById('error-message').style.display = 'none';

// Handle login button click
document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username and password match an employee
    const employee = employees.find(emp => emp.username === username && emp.password === password);

    if (employee) {
        // If valid, save employee data to localStorage
        localStorage.setItem('currentEmployee', JSON.stringify(employee));
        
        // Redirect to the dashboard
        window.location.href = 'dashboard.html';
    } else {
        // Show error message
        document.getElementById('error-message').style.display = 'block';
    }
});
