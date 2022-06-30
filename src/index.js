import { home } from './home.js';
import { menu } from './menu.js';
import { contact } from './contact.js';
import './style.css';

home();

//Tab switching module
let tabSwitchingModule = (function() {
    const homeTab = document.querySelector(".home");
    homeTab.addEventListener("click", home);

    const menuTab = document.querySelector(".menu");
    menuTab.addEventListener("click", menu);

    const contactTab = document.querySelector(".contact");
    contactTab.addEventListener("click", contact);
})();