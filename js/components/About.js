import { TweenMax } from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import * as MockData from './../mockData';

export default class About {
  constructor(app, page) {
    this.app = app;
    this.page = page;
    this.el = this.page.el.querySelector('.readmore-menu');
    this.wrapAbout = this.el.querySelector('.wrap-about');
    this.wrapAboutNavButtons = Array.prototype.slice.call(this.el.querySelectorAll('.info-box .description .nav .arrow'));
    this.readmoreMenuTitle = this.el.querySelector('.call-to-action');
    this.aboutInfosCurrentTab = 0;
    this.init();
  }
  init() {
    console.log('init about component', this.page.name);

    if (this.app.isMobile) {
      this.readmoreMenuTitle = Array.prototype.slice.call(this.el.querySelectorAll('.mobile-call-to-action a'));
      this.readmoreMenuTitle.map((element) => {
        element.addEventListener('click', (event) => {
          event.preventDefault();
          this.aboutInfosCurrentTab = element.getAttribute('data-tab-index');
          this.app.SliderAbout.indexPos = Number(this.aboutInfosCurrentTab);
          this.app.SliderAbout.updatePos();
          this.app.SliderAbout.open();
        });
      });
    } else {
      this.readmoreMenuTitle.addEventListener('click', (event) => {
        event.preventDefault();
        this.el.classList.add('show');

        this.image = this.el.querySelector('.about-ted .image-box');
        this.infoBox = this.el.querySelector('.about-ted .info-box');
        this.title = this.el.querySelector('.about-ted .info-box .title');
        this.text = this.el.querySelector('.about-ted .info-box .description .text');

        this.image.style.backgroundImage = `url(${MockData.aboutInfos[this.aboutInfosCurrentTab].image})`;
        this.title.innerText = MockData.aboutInfos[this.aboutInfosCurrentTab].title;
        this.text.innerText = MockData.aboutInfos[this.aboutInfosCurrentTab].text;
      });
    }

    this.wrapAboutNavButtons.map((el, i) => {
      this.image = this.el.querySelector('.image-box');
      this.infoBox = this.el.querySelector('.info-box');
      this.title = this.el.querySelector('.info-box .title');
      this.text = this.el.querySelector('.info-box .description .text');

      this.image.style.backgroundImage = `url(${MockData.aboutInfos[this.aboutInfosCurrentTab].image})`;
      this.title.innerText = MockData.aboutInfos[this.aboutInfosCurrentTab].title;
      this.text.innerText = MockData.aboutInfos[this.aboutInfosCurrentTab].text;

      el.addEventListener('click', () => {
        if (i) {
          if (this.aboutInfosCurrentTab + 1 < MockData.aboutInfos.length) {
            this.aboutInfosCurrentTab ++;
          } else {
            this.aboutInfosCurrentTab = 0;
          }
        } else {
          if (this.aboutInfosCurrentTab - 1 < 0) {
            this.aboutInfosCurrentTab = MockData.aboutInfos.length - 1;
          } else {
            this.aboutInfosCurrentTab--;
          }
        }

        if (i) {
          TweenMax.to(this.image, 0.7, { x: '-50%', opacity: 0, delay: .1, ease: Cubic.easeInOut, delay: 0.1 });
          TweenMax.to(this.infoBox, 0.7, { right: '30%', opacity: 0, ease: Cubic.easeInOut, onComplete: () => {
            this.image.style.backgroundImage = `url(${MockData.aboutInfos[this.aboutInfosCurrentTab].image})`;
            this.title.innerText = MockData.aboutInfos[this.aboutInfosCurrentTab].title;
            this.text.innerText = MockData.aboutInfos[this.aboutInfosCurrentTab].text;
            TweenMax.fromTo(this.image, 0.7, { x: '50%', opacity: 0 },{ x: '0%', opacity: 1, delay: .3 });
            TweenMax.fromTo(this.infoBox, 0.7, { right: '-30%', opacity: 0 },{ right: '0%', opacity: 1, delay: .3 });
          } });
        } else {
          TweenMax.to(this.image, 0.7, { x: '50%', opacity: 0, ease: Cubic.easeInOut });
          TweenMax.to(this.infoBox, 0.7, { right: '-30%', opacity: 0, ease: Cubic.easeInOut, delay: 0.1, onComplete: () => {
            this.image.style.backgroundImage = `url(${MockData.aboutInfos[this.aboutInfosCurrentTab].image})`;
            this.title.innerText = MockData.aboutInfos[this.aboutInfosCurrentTab].title;
            this.text.innerText = MockData.aboutInfos[this.aboutInfosCurrentTab].text;
            TweenMax.fromTo(this.image, 0.7, { x: '-50%', opacity: 0 },{ x: '0%', opacity: 1, delay: .3 });
            TweenMax.fromTo(this.infoBox, 0.7, { right: '30%', opacity: 0 },{ right: '0%', opacity: 1, delay: .3 });
          } });
        }
      });
    });
  }

  open() {

  }

  updatePos(top) {
    if (!this.app.isMobile) {
      const step2 = this.el.offsetTop - ((this.el.clientHeight / 12) * 1);
      const step3 = this.el.offsetTop + ((this.el.clientHeight / 12) * 1);

      if (top < step2) {
        this.readmoreMenuTitle.classList.add('step2_Out');
        this.aboutInfosCurrentTab = 0;
      }
      if (top > step2 && top < step3) {
        this.readmoreMenuTitle.classList.remove('step2_Out');
        this.readmoreMenuTitle.classList.add('step2_In');
        this.readmoreMenuTitle.classList.add('step3_Out');
        this.aboutInfosCurrentTab = 1;
      }
      if (top > step3) {
        this.readmoreMenuTitle.classList.add('step3_In');
        this.readmoreMenuTitle.classList.remove('step3_Out');
        this.aboutInfosCurrentTab = 2;
      }
    }
  }
}
