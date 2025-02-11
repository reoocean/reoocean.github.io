document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    const navList = document.querySelector(".nav-list");

    // عند النقر على ☰ افتح القائمة
    menuIcon.addEventListener("click", function () {
        navList.classList.add("active");
    });

    // عند النقر على ❌ أغلق القائمة
    closeIcon.addEventListener("click", function () {
        navList.classList.remove("active");
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener("click", function (event) {
        if (!navList.contains(event.target) && !menuIcon.contains(event.target)) {
            navList.classList.remove("active");
        }
    });
});
