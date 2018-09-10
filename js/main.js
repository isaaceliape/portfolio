import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Awards from './pages/Awards';
import Services from './pages/Services';
import Cursor from './components/Cursor';
import Gamepad from './components/Gamepad';
import LiquidImages from './components/LiquidImages';

class App {
  constructor() {
    // INITIAL RULES
    this.el = document.body;
    this.currentPage = 'home',
    this.currentProject = 0,
    this.pages = {};
    this.isMobile = false;
    this.pos = 0,
    this.projectsEl = 0,
    this.projects = [
      {
        description: 'the first book written by people who’ve never written before.',
        id: 'hpmagicwords',
        tecnologies: [
          'html5/css3',
          'javascript',
          'custom framework',
        ],
        link: 'https://www.hpmagicwords.com.br/tool/',
        image: 'assets/images/projects/hp_magic_works.png',
        subtitle: 'speech api',
      },
      {
        description: 'creating protraits of famous people with gettyimages photos',
        id: 'gettyendeless',
        tecnologies: [
          'html5/css3',
          'javascript',
          'webGL',
        ],
        link: 'http://www.gettyendless.com/',
        image: 'assets/images/projects/getty_endless_possibilities.png',
        subtitle: 'webGL',
      },
      {
        description: 'responsive semplice-based portfolio',
        id: 'flplny',
        tecnologies: [
          'html5/css3',
          'javascript',
          'animations',
          'wordpress',
        ],
        link: 'http://flplny.com/',
        image: 'assets/images/projects/flplny.png',
        subtitle: 'responsive',
      },
      {
        description: 'cms and responsive website',
        id: 'fundacaolemann',
        tecnologies: [
          'html5/css3',
          'javascript',
          'wordpress',
        ],
        link: 'http://www.fundacaolemann.org.br/',
        image: 'assets/images/projects/fundacao_lemann.png',
        subtitle: 'responsive',
      },
    ];

  }
  
  init() {
    console.log('INIT APP =]');
    this.isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/) !== null;
    
    this.menu = document.querySelector('.menu');
    this.pages = {
      home: new Home(this),
      awards: new Awards(this),
      about: new About(this),
      services: new Services(this),
    };
    
    this.Gamepad = new Gamepad(this);
    this.Gamepad.init();

    this.Cursor = new Cursor(this);
    this.Nav = new Nav(this);
    this.liquidImages = new LiquidImages(this);

    this.menu.addEventListener('click', this.Nav.show.bind(this.Nav));

    this.pages.home.show();
  }
}

window.app = new App();
document.addEventListener('DOMContentLoaded', window.app.init(window.app));
