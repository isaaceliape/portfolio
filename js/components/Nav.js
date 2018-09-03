
export default class Navegation {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('.nav');
    this.btnClose = this.el.querySelector('.close');
    this.links = [...this.el.querySelectorAll('.link')];

    this.links.forEach((el) => {
      el.addEventListener('click', (event) => {
        const { pageId } = event.currentTarget.dataset;
        this.gotoPage(pageId);
      });
    });
    this.app.menu.addEventListener('click', this.open.bind(this));

    this.btnClose.addEventListener('click', this.close.bind(this));
    this.btnClose.addEventListener('mouseover', () => {
      this.app.cursor.classList.add('rotate');
    });

    this.btnClose.addEventListener('mouseleave', () => {
      this.app.cursor.classList.remove('rotate');
    });
  }

  gotoPage(pageId){
    this.close();
    this.app.data.pages[this.app.data.currentPage].hide();
    this.app.data.currentPage = pageId;
    this.app.data.pages[this.app.data.currentPage].show();
  }
  
  open() {
    console.log('nav open');
    this.el.classList.add('show');
    this.app.cursor.classList.add('white');
  }
  
  close() {
    console.log('nav close');
    this.app.cursor.classList.remove('white');
    this.el.classList.remove('show');
  }

  hide() {
  }

  show() {
  }
}
