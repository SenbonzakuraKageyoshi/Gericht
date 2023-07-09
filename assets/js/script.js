window.addEventListener('DOMContentLoaded', () => {
    // Меню
    const menu = document.querySelector('.header__nav'),
    menuButton = document.querySelector('.menu__button'),
    closeMenuButton = document.querySelector('.close__button');

    const openMenu = () => {
        closeMenuButton.classList.add('active');
        menu.classList.add('active');
    };

    const closeMenu = () => {
        closeMenuButton.classList.remove('active');
        menu.classList.remove('active');
    }

    menuButton.addEventListener('click', openMenu);
    closeMenuButton.addEventListener('click', closeMenu);
    // Меню

    // Анимации
    const sectionAbout = document.querySelector('.section-about'),
    sectionTop = document.querySelector('.section-top'),
    sectionMenu = document.querySelector('.section-menu'),
    sectionSpecial = document.querySelector('.section-special'),
    sectionChef = document.querySelector('.section-chef'),
    sectionReviews = document.querySelector('.section-reviews'),
    sectionRewards = document.querySelector('.section-rewards'),
    sectionForm = document.querySelector('.section-form');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target)
            }
        })
    }, {threshold: 0.4});

    [
    sectionTop, sectionAbout, sectionSpecial,
    sectionChef, sectionReviews, sectionRewards, sectionForm, sectionMenu
    ]
    .forEach((el) => observer.observe(el))
    // Анимации

    // Скролл по секциям
    const anchorLinks = document.querySelectorAll('.anchor-link');

    const scrollToSection = (sectionName) => {
        document.querySelector(`.${sectionName}`).scrollIntoView({behavior: "smooth"});
        closeMenu();
    };

    anchorLinks.forEach((el) => el.addEventListener('click', ({ target }) => scrollToSection(target.getAttribute('data-to'))))
    // Скролл по секциям
});