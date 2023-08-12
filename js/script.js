import initScrollSuave from "./modules/scroll-suave.js";
import animacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initAnimaNumeros from "./modules/anima-numeros.js";
import initFunctionamento from "./modules/funcionamento.js";
import SlideNav from "./modules/slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init();
slide.addControl(".custom-controls");

initScrollSuave();
animacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimaNumeros();
initFunctionamento();
