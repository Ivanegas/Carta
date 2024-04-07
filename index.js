document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        section.addEventListener("click", () => {
            section.classList.toggle("expanded");
        });
    });
});

$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: true
    });
});
