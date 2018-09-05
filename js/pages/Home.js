export default class Home {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('section.home');
    this.projectWrapper = this.el.querySelector('.project-wrapper');
    this.projectHitArea = this.projectWrapper.querySelector('.project-hit-area');
    this.projectDescription = this.projectWrapper.querySelector('.description');
    this.projectLink = this.projectWrapper.querySelector('.project-link .marquee');
    this.projectTechs = this.projectWrapper.querySelector('.list-itens');
    this.closeProjectBtn = this.projectWrapper.querySelector('.close');
    this.projectContent = this.projectWrapper.querySelector('.project-content');
    this.projectItens = [...this.el.querySelectorAll('.project-item[data-project-id]')];
    this.projectImages = [...this.el.querySelectorAll('.project-image')];
    this.subtitle = this.app.el.querySelector('.subtitle');

    this.openProject = this.openProject.bind(this);
    this.addListeners = this.addListeners.bind(this);
    this.closeProject = this.closeProject.bind(this);
    this.mouseOverProjectLink = this.mouseOverProjectLink.bind(this);
    this.mouseLeaveProjectLink = this.mouseLeaveProjectLink.bind(this);
    this.mouseOverProjectContent = this.mouseOverProjectContent.bind(this);
    this.mouseLeaveProjectContent = this.mouseLeaveProjectContent.bind(this);
    this.onOrientationChange = this.onOrientationChange.bind(this);
    this.updateActiveProject = this.updateActiveProject.bind(this);
    this.resetActiveProject = this.resetActiveProject.bind(this);
    this.timer = '';

    if (!this.app.isMobile) {
      this.closeProjectBtn.addEventListener('mouseover', () => {
        this.app.Cursor.el.classList.add('rotate');
      });
  
      this.closeProjectBtn.addEventListener('mouseleave', () => {
        this.app.Cursor.el.classList.remove('rotate');
      });
    } else {
      window.addEventListener('deviceorientation', this.onOrientationChange);
    }

    this.closeProjectBtn.addEventListener('click', this.closeProject);
    this.projectHitArea.addEventListener('click', this.closeProject);
    this.addListeners();
  }

  resetActiveProject(){
    this.el.classList.remove('black');
    for(let i = 0 ; i < this.projectItens.length; i += 1){
      this.projectItens[i].classList.remove('active');
      this.projectImages[i].classList.remove('show');
    }
    this.subtitle.innerText = '';
  }

  updateActiveProject(){
    this.el.classList.add('black');
    for(let i = 0 ; i < this.projectItens.length; i += 1){
      this.projectItens[i].classList.remove('active');
      this.projectImages[i].classList.remove('show');
    }
    this.projectItens[this.pos].classList.add('active');
    this.projectImages[this.pos].classList.add('show');
    this.subtitle.innerText = this.app.projects[this.pos].subtitle;
  }

  onOrientationChange(e){
    let percent = 0;
    const beta = Number(e.beta) - 20;
    percent = ((beta * 100) / 30).toFixed(0);
    percent = percent <= 0 ? 0 : percent;
    percent = percent >= 100 ? 100 : percent;
    const fraction = 100 / this.projectItens.length;
    
    let pos = 0;
    this.projectItens.forEach((value, i) => {
      const start = fraction * i;
      const end = fraction * (i + 1);
      if (percent >= start && percent <= end) {
        pos = i;
      }
    });
    // pos = pos === 0 ? 1 : pos;
    
    if(this.pos !== pos){
      this.pos = pos;
      this.updateActiveProject();
      clearTimeout(this.timer);
      this.timer = setTimeout(this.resetActiveProject, 2000);
    }
  }
  
  mouseOverProjectLink(event){
    const { projectId } = event.currentTarget.dataset;
    this.projectImages.forEach((img) => {
      img.classList.remove('show');
    });
    
    const image = this.projectImages.find(x => x.dataset.projectId === projectId);
    image.classList.add('show');
    this.app.el.classList.add('black');
    this.app.Cursor.el.classList.add('white');
    event.currentTarget.classList.add('white');
  }
  
  mouseLeaveProjectLink(event){
    event.currentTarget.classList.remove('white');
    this.app.el.classList.remove('black');
    this.app.Cursor.el.classList.remove('white');
    this.projectImages.forEach((img) => {
      img.classList.remove('show');
    });
  }

  openProject(event){
    clearTimeout(this.timer);
    window.removeEventListener('deviceorientation', this.onOrientationChange);
    this.subtitle.innerText = '';
    for(let i = 0 ; i < this.projectItens.length; i += 1){
      this.projectItens[i].classList.remove('active');
    }

    const { projectId } = event.currentTarget.dataset;
    const image = this.projectImages.find(x => x.dataset.projectId == projectId);
    const { description, link, tecnologies } = this.app.projects.find(x => x.id == projectId);
    let techList = '';
    tecnologies.forEach((item) => {
      techList += `<li class="tech-item">${item}</li>`;
    });

    this.app.menu.classList.remove('show');
    this.projectDescription.innerText = description;
    this.projectLink.setAttribute('href', link);
    this.projectTechs.innerHTML = techList;

    image.classList.add('opened');
    this.projectWrapper.classList.add('show');
    this.projectContent.scrollTop = 0;

    if(!this.app.isMobile){
      this.projectContent.addEventListener('mouseover', this.mouseOverProjectContent);
      this.projectContent.addEventListener('mouseleave', this.mouseLeaveProjectContent);
    }

    this.removeListener();
  }
  
  closeProject(){
    window.addEventListener('deviceorientation', this.onOrientationChange);

    this.removeListener();
    this.projectContent.removeEventListener('mouseover', this.mouseOverProjectContent);
    this.projectContent.removeEventListener('mouseleave', this.mouseLeaveProjectContent);

    const image = this.el.querySelector('.project-image.show.opened');
    const currentProjectItem = this.el.querySelector('.project-item.white');
    image.classList.remove('opened');
    image.classList.remove('show');
    currentProjectItem.classList.remove('white');
    this.app.el.classList.remove('black');
    this.projectWrapper.classList.remove('show');
    this.app.Cursor.el.classList.remove('white');
    this.app.menu.classList.add('show');
    setTimeout(this.addListeners, 500);
  }

  mouseOverProjectContent(){
    this.app.Cursor.el.classList.remove('white');
  }
  mouseLeaveProjectContent(){
    this.app.Cursor.el.classList.add('white');
  }

  addListeners(){
    this.projectItens.forEach((el) => {
      el.addEventListener('mouseover', this.mouseOverProjectLink);
      el.addEventListener('mouseleave', this.mouseLeaveProjectLink);
      el.addEventListener('click', this.openProject);
    });
  }

  removeListener(){
    this.projectItens.forEach((el) => {
      el.removeEventListener('mouseover', this.mouseOverProjectLink);
      el.removeEventListener('mouseleave', this.mouseLeaveProjectLink);
      el.removeEventListener('click', this.openProject);
    });
  }

  show() {
    this.el.classList.add('show');
    this.app.menu.classList.add('show');
  }
  
  hide() {
    this.app.menu.classList.remove('show');
    this.el.classList.remove('show');
  }
}
