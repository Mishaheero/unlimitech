import { initSlider } from "./modules/slider.js";
import { initNavToggle } from "./modules/hamburger.js";
import { validateForm } from "./modules/validator.js";
import { lazyLoading } from "./modules/lazyload";
import { pageLoad } from "./modules/page-loader.js";

pageLoad ();
initSlider();
initNavToggle();
validateForm();
lazyLoading();
