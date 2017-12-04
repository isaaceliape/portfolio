
export default class Awards {
  constructor(app) {
    this.app = app;
    this.pageName = 'awards';
    this.el = this.app.el.querySelector('.awards');
    this.closeBtn = this.el.querySelector('.close');

    this.closeBtn.addEventListener('click', () => {
      this.app.nav.gotoPage(this.app.pages.home);
    });
  }
  open(){
    console.log('Awards::OPEN');
    this.el.classList.remove('hide');
  }
  close(){
    console.log('Awards::CLOSE');
    this.el.classList.add('hide');
  }
}
