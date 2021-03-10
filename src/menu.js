import menu from "./menu.json";

import menuMurkup from "./templates/menu.hbs"
document.querySelector('.js-menu').innerHTML = menuMurkup(menu);
