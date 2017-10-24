
import { TweenMax } from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Home from './pages/home';

class App {
  constructor() {
    console.log('>>> APP <<<');
    // INITIAL RULES
    this.el = document.querySelector('body');

    this.menuIsOpen = false;
    this.currentEventOpen = '';
  }

  init() {
    // GET ELEMENTS
    this.readmoreMenu = this.el.querySelector('.readmore-menu');
  }
}

window.app = new App();
window.onload = () => {
  app.init();
};
