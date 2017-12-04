
export default class About {
  constructor(app) {
    this.app = app;
    this.pageName = 'about';
    this.el = this.app.el.querySelector('.about');
    this.closeBtn = this.el.querySelector('.close');

    this.closeBtn.addEventListener('click', () => {
      this.app.nav.gotoPage(this.app.pages.home);
    });
  }
  open(){
    console.log('About::OPEN');
    this.el.classList.remove('hide');
    setTimeout(() => {
      this.app.pages.home.menu.classList.add('hide');
    }, 50);
  }
  close(){
    console.log('About::CLOSE');
    this.el.classList.add('hide');
    this.app.pages.home.menu.classList.remove('hide');
  }
}
