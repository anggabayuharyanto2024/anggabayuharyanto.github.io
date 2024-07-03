document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-level');
    window.addEventListener('scroll', function() {
        skillBars.forEach(skillBar => {
            const rect = skillBar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                skillBar.style.width = skillBar.getAttribute('style').split('width: ')[1];
            }
        });
    });
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
