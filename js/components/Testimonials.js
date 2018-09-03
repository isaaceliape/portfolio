import { TweenMax, Cubic } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export default class Testimonials {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('.testimonials');
    this.wrapTestimonials = this.el.querySelector('.wrap-testimonials');
    this.prevButton = this.el.querySelector('.prev-button');
    this.nextButton = this.el.querySelector('.next-button');
    this.pos = 0;
    this.data = [
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit sunt, cumque et odio dolores. Fuga, voluptates. Unde, magnam beatae?',
        perfilImage: 'assets/images/testimonial1-icon.png',
        name: 'Carla Andrade',
        backgroundImage: 'assets/images/testimonial1.png',
      },
      {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit sunt, cumque et odio dolores.',
        perfilImage: 'assets/images/testimonial2-icon.png',
        name: 'Pedro Alcantara',
        backgroundImage: 'assets/images/testimonial2.png',
      },
    ]

    this.prevButton.addEventListener('click', this.onClickPrevButton.bind(this));
    this.nextButton.addEventListener('click', this.onClickNextButton.bind(this));

    let template = '';
    this.data.forEach(({ text, perfilImage, name, backgroundImage }, i) => {
      const activeClass = i === 0 ? 'active' : '';
      template += `
        <div class="testimonial ${activeClass}">
          <div class="bg-image" style="background-image: url(${backgroundImage});"></div>
          <div class="info">
            <p class="text">“${text}”</p>
            <div class="icon" style="background-image: url(${perfilImage});"></div>
            <h4 class="name">${name}</h4>
          </div>
        </div>`;
    });
    this.wrapTestimonials.innerHTML = template;
    this.testimonials = Array.prototype.slice.call(this.el.querySelectorAll('.testimonial'));
    TweenMax.set(this.testimonials[0], { x: 0 });
  }
  updatePos(){

  }
  onClickPrevButton(){
    const targetPos = this.pos - 1 < 0 ? this.data.length - 1 : this.pos - 1;
    const info = this.testimonials[this.pos].querySelector('.info');

    TweenMax.to(info, 0.5,{ y: '-60%', alpha: 0, ease: Cubic.easeInOut, onComplete: () => {
      TweenMax.fromTo(this.testimonials[this.pos], 1,{ x: '0%' },{ x: '-100%', ease: Cubic.easeInOut });
      TweenMax.fromTo(this.testimonials[targetPos], 1,{ x: '100%' },{ x: '0%', ease: Cubic.easeInOut });
      TweenMax.set(info, { y: '-50%', alpha: 1, delay: 1 });
      this.pos = targetPos;
    }});
  }
  onClickNextButton(){
    const targetPos = this.pos + 1 < this.data.length ? this.pos + 1 : 0;
    const info = this.testimonials[this.pos].querySelector('.info');

    TweenMax.to(info, 0.5,{ y: '-60%', alpha: 0, ease: Cubic.easeInOut, onComplete: () => {
      TweenMax.fromTo(this.testimonials[this.pos], 1,{ x: '0%' },{ x: '100%', ease: Cubic.easeInOut });
      TweenMax.fromTo(this.testimonials[targetPos], 1,{ x: '-100%' },{ x: '0%', ease: Cubic.easeInOut });
      TweenMax.set(info, { y: '-50%', alpha: 1, delay: 1 });
      this.pos = targetPos;
    }});
  }

  open() {
  }
  close() {
  }
  show(callback) {
    // console.log('Testimonials => show');
  }
  hide(callback) {
    // console.log('Testimonials => hide');
  }
}
