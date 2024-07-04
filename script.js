function updateDateTime() {
    const now = new Date();
    
    // Get the date
    const date = now.toLocaleDateString();
    document.getElementById('current-date').innerHTML = "Current Time: " + date;
    
    // Get the time
    const time = now.toLocaleTimeString();
    document.getElementById('current-time').innerHTML = "Current Day of the Week: " + time;
}

// The date and time Update
updateDateTime();

// Update the date and time every second
setInterval(updateDateTime, 1000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.navbar-list');
    const menuIcon = document.querySelector('.menu-icon');
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('change');
}


