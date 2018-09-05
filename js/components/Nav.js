
export default class Navegation {
  constructor(app) {
    this.app = app;
    this.el = app.el.querySelector('.nav');
    this.btnClose = this.el.querySelector('.close');
    this.links = [...this.el.querySelectorAll('.link')];
    this.icons = [...this.el.querySelectorAll('.icon')];

    this.onMouseOverLink = this.onMouseOverLink.bind(this);
    this.onMouseLeaveLink = this.onMouseLeaveLink.bind(this);
    this.hide = this.hide.bind(this);
    this.hide = this.hide.bind(this);

    this.links.forEach((el) => {
      el.addEventListener('click', (event) => {
        const { pageId, iconId } = event.currentTarget.dataset;
        const currentIcon = this.icons.find(x => x.classList.contains(iconId));
        currentIcon.classList.add('expand');
        this.app.Cursor.el.classList.remove('white');
        this.el.classList.add('hideLinks');
        this.gotoPage(pageId);
        
        setTimeout(() => {
          currentIcon.classList.remove('expand');
          this.app.Cursor.el.classList.add('white');
          this.app.el.classList.remove('black');
          this.el.classList.remove('hideLinks');
          this.hide();
        }, 1500);
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

  onMouseOverLink(e) {
    const { iconId } = e.currentTarget.dataset;
    const currentIcon = this.icons.find(x => x.classList.contains(iconId));
    currentIcon.classList.add('active');
  }

  onMouseLeaveLink() {
    this.icons.forEach((el) => {
      el.classList.remove('active');
    });
  }

  gotoPage(pageId){
    this.app.pages[this.app.currentPage].hide();
    this.app.currentPage = pageId;
    this.app.pages[this.app.currentPage].show();
  }

  show() {
    this.app.pages[this.app.currentPage].hide();
    this.app.el.classList.add('black');
    this.el.classList.add('show');
    this.app.Cursor.el.classList.add('white');

    this.links.forEach((el) => {
      el.addEventListener('mouseover', this.onMouseOverLink);
      el.addEventListener('mouseleave', this.onMouseLeaveLink);
    });
  }
  
  hide() {
    this.app.pages[this.app.currentPage].show();
    this.app.el.classList.remove('black');
    this.app.Cursor.el.classList.remove('white');
    this.el.classList.remove('show');

    this.links.forEach((el) => {
      el.removeEventListener('mouseover', this.onMouseOverLink);
      el.removeEventListener('mouseleave', this.onMouseLeaveLink);
    });
  }
}
