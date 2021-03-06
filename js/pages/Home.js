export default class Home {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('section.home');
    this.logo = this.app.el.querySelector('.logo');
    this.subtitle = this.app.el.querySelector('.subtitle');
    this.projectWrapper = this.el.querySelector('.project-wrapper');
    this.projectItens = [...this.el.querySelectorAll('.project-item[data-project-id]')];
    this.projectLink = this.projectWrapper.querySelector('.project-link .marquee');
    this.projectTechs = this.projectWrapper.querySelector('.list-itens');
    this.projectContent = this.projectWrapper.querySelector('.project-content');
    this.projectHitArea = this.projectWrapper.querySelector('.project-hit-area');
    this.closeProjectBtn = this.projectWrapper.querySelector('.close');
    this.projectDescription = this.projectWrapper.querySelector('.description');

    this.openProject = this.openProject.bind(this);
    this.addListeners = this.addListeners.bind(this);
    this.closeProject = this.closeProject.bind(this);
    this.resetActiveProject = this.resetActiveProject.bind(this);
    this.onOrientationChange = this.onOrientationChange.bind(this);
    this.updateActiveProject = this.updateActiveProject.bind(this);
    this.projectLink_mouseover = this.projectLink_mouseover.bind(this);
    this.projectLink_mouseleave = this.projectLink_mouseleave.bind(this);
    this.projectContent_mouseover = this.projectContent_mouseover.bind(this);
    this.projectContent_mouseleave = this.projectContent_mouseleave.bind(this);
    this.switchProjectsTimeOut = null;
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
    this.projectItens.forEach((el) => {
      el.classList.remove('active');
      el.classList.remove('hide');
    });
    const { id } = this.app.projects[this.pos];
    this.app.el.classList.remove('black');
    this.app.liquidImages.canvas.hideImages(id);
    this.subtitle.innerText = '';
  }

  updateActiveProject(){
    this.el.classList.add('black');

    this.projectItens.forEach((el) => {
      el.classList.remove('active');
      el.classList.add('hide');
    });
    this.app.el.classList.add('black');
    this.projectItens[this.pos].classList.add('active');
    this.projectItens[this.pos].classList.remove('hide');
    this.subtitle.innerText = this.app.projects[this.pos].subtitle;
    const { id } = this.app.projects[this.pos];
    this.app.liquidImages.canvas.showImage(id);
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

    if(this.pos !== pos){
      this.pos = pos;
      this.updateActiveProject();
      clearTimeout(this.timer);
      this.timer = setTimeout(this.resetActiveProject, 2000);
    }
  }

  projectLink_mouseover(event){
    const { projectId } = event.currentTarget.dataset;
    clearTimeout(this.switchProjectsTimeOut);

    this.projectItens.forEach((el) => {
      if(el.dataset.projectId !== projectId){
        el.classList.add('hide');
      }
    });
    const { subtitle } = this.app.projects.find(x => x.id === projectId);
    this.subtitle.innerText = subtitle;

    event.currentTarget.classList.add('white');
    this.logo.classList.add('hide');
    this.app.el.classList.add('black');
    this.app.Cursor.el.classList.add('white');
    this.app.liquidImages.canvas.showImage(projectId);
  }
  
  projectLink_mouseleave(event){
    event.currentTarget.classList.remove('white');
    this.logo.classList.remove('hide');
    this.app.Cursor.el.classList.remove('white');
    this.app.liquidImages.canvas.hideImages();
    this.subtitle.innerText = '';

    this.switchProjectsTimeOut = setTimeout(() => {
      this.app.el.classList.remove('black');
    },100);

    this.projectItens.forEach((el) => {
      el.classList.remove('hide');
    });
  }

  openProject(e){
    clearTimeout(this.timer);
    window.removeEventListener('deviceorientation', this.onOrientationChange);
    this.subtitle.innerText = '';

    this.projectItens.forEach((el) => {
      el.classList.remove('active');
    });

    const { projectId } = e.currentTarget.dataset;
    const { description, link, tecnologies } = this.app.projects.find(x => x.id == projectId);
    let techList = '';
    tecnologies.forEach((item) => {
      techList += `<li class="tech-item">${item}</li>`;
    });

    this.app.liquidImages.canvas.expandImage(projectId);
    this.app.menu.classList.remove('show');
    this.projectDescription.innerText = description;
    this.projectLink.setAttribute('href', link);
    this.projectTechs.innerHTML = techList;
    e.currentTarget.classList.add('stop');
    this.projectWrapper.classList.add('show');
    this.projectWrapper.scrollTop = 0;

    if(!this.app.isMobile){
      this.projectContent.addEventListener('mouseover', this.projectContent_mouseover);
      this.projectContent.addEventListener('mouseleave', this.projectContent_mouseleave);
    }

    this.removeListener();
  }

  closeProject(){
    window.addEventListener('deviceorientation', this.onOrientationChange);

    this.removeListener();
    this.projectContent.removeEventListener('mouseover', this.projectContent_mouseover);
    this.projectContent.removeEventListener('mouseleave', this.projectContent_mouseleave);

    const currentProjectItem = this.el.querySelector('.project-item.white');
    this.app.liquidImages.canvas.resetImageSize(currentProjectItem.dataset.projectId);
    currentProjectItem.classList.remove('white');
    currentProjectItem.classList.remove('stop');
    this.logo.classList.remove('hide');
    this.app.el.classList.remove('black');
    this.projectWrapper.classList.remove('show');
    this.app.Cursor.el.classList.remove('white');
    this.app.menu.classList.add('show');
    this.app.liquidImages.canvas.hideImages();
    this.projectItens.forEach((el) => {
      el.classList.remove('hide');
    });
    setTimeout(this.addListeners, 500);
  }

  projectContent_mouseover(){
    this.app.Cursor.el.classList.remove('white');
  }
  projectContent_mouseleave(){
    this.app.Cursor.el.classList.add('white');
  }

  addListeners(){
    this.projectItens.forEach((el) => {
      el.addEventListener('mouseover', this.projectLink_mouseover);
      el.addEventListener('mouseleave', this.projectLink_mouseleave);
      el.addEventListener('click', this.openProject);
    });
  }

  removeListener(){
    this.projectItens.forEach((el) => {
      el.removeEventListener('mouseover', this.projectLink_mouseover);
      el.removeEventListener('mouseleave', this.projectLink_mouseleave);
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
