import { TweenMax, Cubic } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export default class Contact {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('.contact');
    this.closeButton = this.el.querySelector('.close-button');
    this.prevButton = this.el.querySelector('.steps-nav .wrap-controls .prev-button');
    this.nextButton = this.el.querySelector('.steps-nav .wrap-controls .next-button');
    this.steps = Array.prototype.slice.call(this.el.querySelectorAll('.step'));
    this.bullets = Array.prototype.slice.call(this.el.querySelectorAll('.wrap-bullets .bullet'));
    this.closeButton.addEventListener('click', this.close.bind(this));
    this.activeStep = 0;

    TweenMax.fromTo(this.steps[0], .5,{ display: 'none', opacity: 0, top: '55%' },{ display: 'block', opacity: 1, top: '50%', ease: Cubic.easeInOut, onComplete: () => {
      this.steps[0].classList.add('active');
    }});

    this.prevButton.addEventListener('click', this.onClickPrevButton.bind(this));
    this.nextButton.addEventListener('click', this.onClickNextButton.bind(this));
  }
  onClickPrevButton(){
    const activeStep = this.el.querySelector('.step.active');
    if(this.activeStep !== 0){
      TweenMax.to(activeStep, .3, { opacity: 0, left: '55%', ease: Cubic.easeOut, onComplete: () => {
        TweenMax.set(activeStep, { display: 'none' });
        this.activeStep = (this.activeStep - 1) >= 0 ? this.activeStep - 1 : 0;
        this.updateStep();
    
        TweenMax.set(this.steps[this.activeStep], {display: 'block'})
        TweenMax.fromTo(this.steps[this.activeStep], .5,{ opacity: 0, left: '45%' },{ opacity: 1, left: '50%', ease: Cubic.easeOut });
      }});
    }
  }
  onClickNextButton(){
    const activeStep = this.el.querySelector('.step.active');
    if(this.activeStep !== this.steps.length - 1){
      TweenMax.to(activeStep, .3, { opacity: 0, left: '45%', ease: Cubic.easeOut, onComplete: () => {
        TweenMax.set(activeStep, { display: 'none' });
        this.activeStep = (this.activeStep + 1) < this.steps.length ? this.activeStep + 1 : this.steps.length - 1;
        this.updateStep();
    
        TweenMax.set(this.steps[this.activeStep], {display: 'block'})
        TweenMax.fromTo(this.steps[this.activeStep], .5,{ opacity: 0, left: '55%' },{ opacity: 1, left: '50%', ease: Cubic.easeOut });
      }});
    }
  }
  updateStep(){
    for (let i = 0; i < this.steps.length; i++) {
      this.bullets[i].classList.remove('active');
      this.steps[i].classList.remove('active');
    }
    this.bullets[this.activeStep].classList.add('active');
    this.steps[this.activeStep].classList.add('active');
  }
  open() {
    // console.log('CONTACT => open');
    this.app.el.classList.add('blockScroll');
    TweenMax.to(this.el, 0.5,{'top': '0vh', ease: Cubic.easeOut});
  }
  close() {
    // console.log('CONTACT => close');
    TweenMax.to(this.el, 0.5,{'top': '100vh', ease: Cubic.easeIn, onComplete: () => {
      TweenMax.set(this.el, {'top': '100vh'});
      this.app.el.classList.remove('blockScroll');
    }});
  }
  show(callback) {
    // console.log('CONTACT => show');
  }
  hide(callback) {
    // console.log('CONTACT => hide');
  }
}
