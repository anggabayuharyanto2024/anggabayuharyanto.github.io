document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.getElementById('about');

    aboutSection.addEventListener('mouseover', function () {
        aboutSection.style.backgroundColor = '#f0f0f0';
    });

    aboutSection.addEventListener('mouseout', function () {
        aboutSection.style.backgroundColor = 'transparent';
    });
});
