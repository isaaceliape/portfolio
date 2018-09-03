
export default class About {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('section.about');
    this.btnClose = this.el.querySelector('.close');
    this.callToAction = this.el.querySelector('.call-to-action .marquee');
    this.marquee = this.el.querySelector('.call-to-action .marquee');

    this.marquee.addEventListener('mouseover', () => {
      this.app.cursor.classList.add('white');
      this.el.classList.add('black');
    });
    this.marquee.addEventListener('mouseleave', () => {
      this.app.cursor.classList.remove('white');
      this.el.classList.remove('black');
    });

    this.btnClose.addEventListener('mouseover', () => {
      this.app.cursor.classList.add('rotate');
    });

    this.btnClose.addEventListener('mouseleave', () => {
      this.app.cursor.classList.remove('rotate');
    });

    this.btnClose.addEventListener('click', () => {
      this.app.Nav.gotoPage('home');
    });
  }
  show() {
    this.el.classList.add('show');
  }

  hide() {
    this.el.classList.remove('show');
  }

  open() {
  }

  close() {
  }
}
