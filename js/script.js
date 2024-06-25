
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

dropdownBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
    }

    if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
    }
});

document.querySelectorAll('.navbar-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
