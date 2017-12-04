
import { TweenMax } from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Nav from './components/Nav';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Awards from './pages/Awards';

class App {
  constructor() {
    console.log('>>> APP <<<');
    this.el = document.querySelector('body');
  }
  init() {
    this.pages = {
      home: new Home(this),
      about: new About(this),
      services: new Services(this),
      awards: new Awards(this),
    }
    this.container = this.el.querySelector('.container');
    this.nav = new Nav(this);
    this.currentPage = this.pages.home;
    this.currentPage.open();
  }
}

window.app = new App();
window.onload = () => {
  app.init();
};
