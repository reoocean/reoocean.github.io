document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const navList = document.getElementById('navList');
    const closeIcon = document.getElementById('closeIcon');

    menuIcon.addEventListener('click', function() {
        navList.classList.add('active');
    });

    closeIcon.addEventListener('click', function() {
        navList.classList.remove('active');
    });
});
