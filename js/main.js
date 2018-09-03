
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Awards from './pages/Awards';
import Services from './pages/Services';

class App {
  constructor() {
    // INITIAL RULES
    this.isMobile = window.isMobile;
    this.currentPage = 'home';
    this.el = document.body;
    this.data = {
      currentPage: 'home',
      pages: {
        home: new Home(this),
        awards: new Awards(this),
        about: new About(this),
        services: new Services(this),
      }
    };

    this.data.pages.home.show();
  }

  init() {
    console.log('INIT APP =]');
    this.menu = document.querySelector('.menu');
    this.cursor = document.querySelector('.cursor');

    this.Nav = new Nav(this);

    window.addEventListener('mousemove', this.onMouseMove.bind(this));
  }
  onMouseMove(event) {
    const { pageX: x, pageY: y } = event;
    this.cursor.style.left = `${x}px`;
    this.cursor.style.top = `${y}px`;
  }
}

window.app = new App();
document.addEventListener('DOMContentLoaded', window.app.init(window.app));
