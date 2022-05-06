const openMenuIcon = document.querySelector('.header-right .fa-bars');
const closeMenuIcon = document.querySelector('.hamburger-menu .fa-times');

openMenuIcon.addEventListener ('click',
    function () {
        document.querySelector('header .hamburger-menu').classList.add ("active");
    }
);

closeMenuIcon.addEventListener ('click',
    function () {
        document.querySelector('header .hamburger-menu.active').className = "hamburger-menu";
    }
);