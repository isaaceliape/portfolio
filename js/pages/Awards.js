
export default class Awards {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('section.awards');
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
