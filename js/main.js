
import { TweenMax } from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Home from './pages/home';

class App {
  constructor() {
    console.log('>>> APP <<<');
    this.el = document.querySelector('body');
  }
  init() {
    // GET ELEMENTS
    this.tooltip = this.el.querySelector('.tooltip .tooltip-item');
    this.menu = this.el.querySelector('.menu-and-tooltip .menu');
    this.jobs = this.el.querySelector('.jobs');
    this.jobLinks = Array.prototype.slice.call(this.el.querySelectorAll('.jobs .job-link'));
    this.jobLinks.forEach(element => {
      element.addEventListener('mouseover', this.jobLinkHover.bind(this))
      element.addEventListener('mouseout', this.jobLinkOut.bind(this))
    });
  }
  jobLinkHover(e){
    const tooltip = e.currentTarget.dataset.tooltip;
    this.tooltip.innerText = tooltip;
    this.menu.classList.add('hide');
    e.currentTarget.classList.add('active');
    this.jobs.classList.add('hovered-over');
  }
  jobLinkOut(e){
    this.tooltip.innerText = '';

    this.jobs.classList.remove('hovered-over');
    this.menu.classList.remove('hide');
    this.jobLinks.forEach(element => {
      element.classList.remove('active')
    });
  }
}

window.app = new App();
window.onload = () => {
  app.init();
};
