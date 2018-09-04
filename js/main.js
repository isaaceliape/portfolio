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
    this.projectsEl = [...document.querySelectorAll('section.home .project-item[data-project-id]')];
    this.projectsImagesEl = [...document.querySelectorAll('section.home .project-image')];
    this.subtitle = document.querySelector('.subtitle');
    console.log(this.isMobile);
    
    this.onOrientationChange = this.onOrientationChange.bind(this);

    if(this.isMobile){
      window.addEventListener('deviceorientation', this.onOrientationChange , true);
    }
    
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

  onOrientationChange(e){
    let percent = 0;
    const beta = Number(e.beta) - 20;
    percent = ((beta * 100) / 30).toFixed(0);
    percent = percent <= 0 ? 0 : percent;
    percent = percent >= 100 ? 100 : percent;
    const fraction = 100 / this.projectsEl.length;

    let pos = 0;
    this.projectsEl.forEach((value, i) => {
      const start = fraction * i;
      const end = fraction * (i + 1);
      if (percent >= start && percent <= end) {
        pos = i;
      }
    });
    // pos = pos === 0 ? 1 : pos;

    if(this.pos !== pos){
      this.pos = pos;
      console.log({pos, percent});
      this.updateActiveProject();
    }
  }

  updateActiveProject(){
    this.projectsEl.forEach((el) => {
      el.classList.remove('active');
    });
    this.projectsImagesEl.forEach((el) => {
      el.classList.remove('show');
    });
    this.projectsEl[this.pos].classList.add('active');
    this.projectsImagesEl[this.pos].classList.add('show');
    this.subtitle.innerText = this.projects[this.pos].subtitle;
  }
}

window.app = new App();
document.addEventListener('DOMContentLoaded', window.app.init(window.app));
