
export default class Awards {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('section.awards');
    this.closeBtn = this.el.querySelector('.close');

    this.closeBtn.addEventListener('click', () => {
      this.app.Cursor.el.classList.add('rotate');
    });

    this.closeBtn.addEventListener('click', () => {
      this.app.Nav.gotoPage('home');
    });

    this.closeBtn.addEventListener('mouseover', () => {
      this.app.Cursor.el.classList.add('rotate');
    });

    this.closeBtn.addEventListener('mouseleave', () => {
      this.app.Cursor.el.classList.remove('rotate');
    });
  }
  show() {
    this.el.classList.add('show');
    this.app.menu.classList.remove('show');
  }

  hide() {
    this.el.classList.remove('show');
  }

  open() {
  }

  close() {
  }
}
