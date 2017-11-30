
export default class Nav {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('.nav');
    this.menu = this.app.el.querySelector('.menu-and-tooltip .menu');
    this.closeBtn = this.app.el.querySelector('.close-btn');
    this.navItens = Array.prototype.slice.call(this.el.querySelectorAll('.nav-item .link'));
    this.menuAndTooltip = this.app.el.querySelector('.menu-and-tooltip');

    this.menu.addEventListener('click', this.openMenu.bind(this));
    this.closeBtn.addEventListener('click', this.closeMenu.bind(this));
    this.navItens.forEach(el => {
      el.addEventListener('click', this.onClickNavItem.bind(this));
    });
  }
  onClickNavItem(e){
    e.preventDefault();
    const targetPageName = e.target.dataset.page;
    this.closeMenu();
    this.gotoPage(this.app.pages[targetPageName]);
  }
  gotoPage(targetPage){
    this.app.currentPage.close();
    targetPage.open();
    this.app.currentPage = targetPage;
  }
  openMenu(){
    console.log('MENU OPENED');
    this.closeBtn.classList.remove('hide');
    this.app.currentPage.close();
    this.menuAndTooltip.classList.add('menu-opened');
  }
  closeMenu(){
    console.log('MENU CLOSED');
    this.app.currentPage.open();
    this.closeBtn.classList.add('hide');
    this.menuAndTooltip.classList.remove('menu-opened');
  }
}