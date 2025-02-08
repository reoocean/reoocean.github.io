document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const navList = document.getElementById('navList');

    menuIcon.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});
