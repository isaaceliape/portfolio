
export default class Navegation {
  constructor(app) {
    this.app = app;
    this.el = app.el.querySelector('.nav');
    this.btnClose = this.el.querySelector('.close');
    this.links = [...this.el.querySelectorAll('.link')];

    this.links.forEach((el) => {
      el.addEventListener('click', (event) => {
        const { pageId } = event.currentTarget.dataset;
        this.gotoPage(pageId);
      });
    });

    this.app.menu.addEventListener('click', this.show.bind(this));

    this.btnClose.addEventListener('click', this.hide.bind(this));
    this.btnClose.addEventListener('mouseover', () => {
      this.app.Cursor.el.classList.add('rotate');
    });

    this.btnClose.addEventListener('mouseleave', () => {
      this.app.Cursor.el.classList.remove('rotate');
    });
  }

  gotoPage(pageId){
    this.hide();
    this.app.pages[this.app.currentPage].hide();
    this.app.currentPage = pageId;
    this.app.pages[this.app.currentPage].show();
  }

  show() {
    this.el.classList.add('show');
    this.app.Cursor.el.classList.add('white');
  }
  
  hide() {
    this.app.Cursor.el.classList.remove('white');
    this.el.classList.remove('show');
  }
}
