
export default class Services {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('section.services');
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
