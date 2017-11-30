
export default class Services {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('section.services');
    this.closeBtn = this.el.querySelector('.close');

    this.closeBtn.addEventListener('click', () => {
      this.app.nav.gotoPage(this.app.pages.home);
    });
  }
  open(){
    console.log('Services::OPEN');
    this.el.classList.remove('hide');
  }
  close(){
    console.log('Services::CLOSE');
    this.el.classList.add('hide');
  }
}
