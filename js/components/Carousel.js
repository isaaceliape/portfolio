import { TweenMax } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export default class Carousel {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('.media .carousel');
    this.wrapImages = this.el.querySelector('.wrap-images');
    this.prevButton = this.el.querySelector('.prev-button');
    this.nextButton = this.el.querySelector('.next-button');
    this.images = Array.prototype.slice.call(this.wrapImages.querySelectorAll('.image'));
    this.wrapBullets = this.el.querySelector('.carousel-nav .bullets');
    this.imageWidth = this.el.querySelector('.wrap-images .image').clientWidth;
    this.gap = 40;
    this.currentOffset = 0;
    this.activePos = 1;

    if(!this.app.isMobile){
      this.wrapImages.style.width = `${(this.imageWidth + this.gap) * this.images.length}px`;
      this.prevButton.addEventListener('click', this.onClickPrevButton.bind(this));
      this.nextButton.addEventListener('click', this.onClickNextButton.bind(this));
  
      this.images.forEach((el, i) => {
        const activeClass = i === 1 ? 'active' : '';
        const bulletTemplate = document.createElement('div');
        bulletTemplate.setAttribute('class', `bullet ${activeClass}`);
        this.wrapBullets.appendChild(bulletTemplate);
      });
  
      this.bullets = Array.prototype.slice.call(this.el.querySelectorAll('.carousel-nav .bullets .bullet'));
    }
  }
  updatePos(){
    for (let i = 0; i < this.images.length; i++) {
      this.images[i].classList.remove('active');
      this.bullets[i].classList.remove('active');
    }
    this.bullets[this.activePos].classList.add('active');
    this.images[this.activePos].classList.add('active');
  }
  onClickPrevButton(){
    if((this.activePos + 1) < this.images.length){
      this.currentOffset -= (this.imageWidth + this.gap);
      this.activePos++;
      TweenMax.to(this.wrapImages, 0.3,{x: this.currentOffset});
      this.updatePos();
    }
  }
  onClickNextButton(){
    if((this.activePos - 1) >= 0){
      this.currentOffset += (this.imageWidth + this.gap);
      this.activePos--;
      TweenMax.to(this.wrapImages, 0.3,{x: this.currentOffset});
      this.updatePos();
    }
  }

  open() {
  }
  close() {
  }
  show(callback) {
    // console.log('Carousel => show');
  }
  hide(callback) {
    // console.log('Carousel => hide');
  }
}
