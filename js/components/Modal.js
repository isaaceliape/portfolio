import { TweenMax } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export default class Modal {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('.modal');
    this.overlay = this.el.querySelector('.overlay');
    this.content = this.el.querySelector('.content');
    this.closeButton = this.el.querySelector('.close-button');
    this.wrapContent = this.el.querySelector('.wrap-content');

    this.closeButton.addEventListener('click', this.close.bind(this));
  }
  open() {
    // console.log('MODAL => open');
    this.app.el.classList.add('blockScroll');
    TweenMax.set(this.el, {'top': 0});
    TweenMax.to(this.overlay, 0.5,{'opacity': 0.7});
    TweenMax.to(this.wrapContent, 0.5,{'bottom': '0vh', ease: Cubic.easeOut, delay: 0.5});
  }
  close() {
    TweenMax.to(this.wrapContent, 0.5,{'bottom': '-100vh', ease: Cubic.easeIn });
    TweenMax.to(this.overlay, 0.5,{'opacity': 0, delay: 0.5, onComplete: () => {
      TweenMax.set(this.el, {'top': '100vh'});
      this.app.el.classList.remove('blockScroll');
    }});
    this.content.innerHTML = '';
    // console.log('MODAL => close');
  }
  setContent(content){
    this.content.innerHTML = content;
  }
  show(callback) {
    // console.log('MODAL => show');
  }
  hide(callback) {
    // console.log('MODAL => hide');
  }
}
