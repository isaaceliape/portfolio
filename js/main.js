import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Awards from './pages/Awards';
import Services from './pages/Services';
import Cursor from './components/Cursor';

class App {
  constructor() {
    // INITIAL RULES
    this.currentPage = 'home';
    this.el = document.body;
    this.currentPage = 'home',
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
    
    this.Cursor = new Cursor(this);
    this.Nav = new Nav(this);

    this.pages.home.show();
  }
}

window.app = new App();
document.addEventListener('DOMContentLoaded', window.app.init(window.app));
