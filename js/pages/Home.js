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

    this.openProject = this.openProject.bind(this);
    this.addListeners = this.addListeners.bind(this);
    this.closeProject = this.closeProject.bind(this);
    this.mouseOverProjectLink = this.mouseOverProjectLink.bind(this);
    this.mouseLeaveProjectLink = this.mouseLeaveProjectLink.bind(this);
    this.mouseOverProjectContent = this.mouseOverProjectContent.bind(this);
    this.mouseLeaveProjectContent = this.mouseLeaveProjectContent.bind(this);

    this.closeProjectBtn.addEventListener('mouseover', () => {
      this.app.Cursor.el.classList.add('rotate');
    });

    this.closeProjectBtn.addEventListener('mouseleave', () => {
      this.app.Cursor.el.classList.remove('rotate');
    });

    this.closeProjectBtn.addEventListener('click', this.closeProject);
    this.projectHitArea.addEventListener('click', this.closeProject);

    this.addListeners();
  }

  mouseOverProjectLink(event){
    const { projectId } = event.currentTarget.dataset;
    this.projectImages.forEach((img) => {
      img.classList.remove('show');
    });
    const image = this.projectImages.find(x => x.dataset.projectId === projectId);
    
    image.classList.add('show');
    this.el.classList.add('black');
    this.app.Cursor.el.classList.add('white');
    event.currentTarget.classList.add('white');
  }
  
  mouseLeaveProjectLink(event){
    event.currentTarget.classList.remove('white');
    this.el.classList.remove('black');
    this.app.Cursor.el.classList.remove('white');
    this.projectImages.forEach((img) => {
      img.classList.remove('show');
    });
  }
  
  openProject(event){
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

    this.projectContent.addEventListener('mouseover', this.mouseOverProjectContent);
    this.projectContent.addEventListener('mouseleave', this.mouseLeaveProjectContent);

    this.removeListener();
  }
  
  closeProject(){
    this.removeListener();
    this.projectContent.removeEventListener('mouseover', this.mouseOverProjectContent);
    this.projectContent.removeEventListener('mouseleave', this.mouseLeaveProjectContent);

    const image = this.el.querySelector('.project-image.show.opened');
    const currentProjectItem = this.el.querySelector('.project-item.white');
    image.classList.remove('opened');
    image.classList.remove('show');
    currentProjectItem.classList.remove('white');
    this.el.classList.remove('black');
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
      el.addEventListener('mouseover', this.mouseOverProjectLink, true);
      el.addEventListener('mouseleave', this.mouseLeaveProjectLink, true);
      el.addEventListener('click', this.openProject, true);
    });
  }

  removeListener(){
    this.projectItens.forEach((el) => {
      el.removeEventListener('mouseover', this.mouseOverProjectLink, true);
      el.removeEventListener('mouseleave', this.mouseLeaveProjectLink, true);
      el.removeEventListener('click', this.openProject, true);
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
