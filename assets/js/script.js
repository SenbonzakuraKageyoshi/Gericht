window.addEventListener('DOMContentLoaded', () => {
    const sectionAbout = document.querySelector('.section-about'),
    sectionTop = document.querySelector('.section-top')

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target)
            }
        })
    }, {threshold: 0.5});

   [sectionTop, sectionAbout].forEach((el) => observer.observe(el))
})