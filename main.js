const openMenuIcon = document.querySelector('.header-right .fa-bars');
const closeMenuIcon = document.querySelector('.hamburger-menu .fa-times');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.style.height = "200px";
hamburgerMenu.style.minHeight = "200px";

openMenuIcon.addEventListener ('click',
    function () {
        hamburgerMenu.classList.add ("active");
    }
);

closeMenuIcon.addEventListener ('click',
    function () {
        hamburgerMenu.className = "hamburger-menu";
    }
);


// per far si che il burgher menu si chiuda quando supero 1000px con la tendina aperta
// così la tendina non mi riappare da sola quando scendo nuovamente sotto i 1000px
function myFunction(x) {
    if (x.matches) {
        hamburgerMenu.className = "hamburger-menu";
    }
}

const mmObj = window.matchMedia("(min-width: 1000px)");

myFunction(mmObj);

mmObj.addListener(myFunction);