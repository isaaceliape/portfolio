
export default class Home {
  constructor(app) {
    this.app = app;
    this.pageName = 'home';
    this.el = this.app.el.querySelector('section.home');
    this.menu = this.app.el.querySelector('.menu');
    this.logo = this.app.el.querySelector('.logo');
    this.wrapJobLinks = this.app.el.querySelector('.wrap-job-links');
    this.tooltip = this.app.el.querySelector('.tooltip .tooltip-item');
    this.jobLinks = Array.prototype.slice.call(this.el.querySelectorAll('.jobs .job-link'));
    this.jobs = this.el.querySelector('.jobs');
    
    this.logo.addEventListener('click', this.logoClick.bind(this));
    this.logo.addEventListener('mouseover', this.logoHoverIn.bind(this));
    this.logo.addEventListener('mouseout', this.logoHoverOut.bind(this));
    this.jobLinks.forEach(el => {
      el.addEventListener('mouseover', this.jobLinkHover.bind(this));
      el.addEventListener('mouseout', this.jobLinkOut.bind(this));
    });
  }
  open(){
    console.log('Home::OPEN');
    this.el.classList.remove('hide');
  }
  close(){
    console.log('Home::CLOSE');
    this.el.classList.add('hide');
  }
  logoClick(){
    this.app.nav.gotoPage(this.app.pages.about);
  }
  logoHoverIn(){
    this.wrapJobLinks.classList.add('hide');
    this.tooltip.innerText = 'about';
    this.menu.classList.add('hide');
    this.logo.classList.add('hover');
  }
  logoHoverOut(){
    this.tooltip.innerText = '';
    this.menu.classList.remove('hide');
    this.wrapJobLinks.classList.remove('hide');
    this.logo.classList.remove('hover');
  }
  jobLinkHover(e){
    const tooltip = e.currentTarget.dataset.tooltip;
    this.tooltip.innerText = tooltip;
    this.menu.classList.add('hide');
    e.currentTarget.classList.add('active');
    this.jobs.classList.add('hovered-over');
    this.logo.style.opacity = 0;
  }
  jobLinkOut(e){
    this.tooltip.innerText = '';
    this.logo.style.opacity = 1;
    this.jobs.classList.remove('hovered-over');
    this.menu.classList.remove('hide');
    this.jobLinks.forEach(element => {
      element.classList.remove('active')
    });
  }
}
