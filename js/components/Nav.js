export default class Navegation {
  constructor(app) {
    this.app = app;
    this.el = app.el.querySelector('.nav');
    this.btnClose = this.el.querySelector('.close');
    this.links = [...this.el.querySelectorAll('.link')];
    this.icons = [...this.el.querySelectorAll('.icon-wrapper')];

    this.hide = this.hide.bind(this);
    this.link_mouseover = this.link_mouseover.bind(this);
    this.link_mouseleave = this.link_mouseleave.bind(this);
    this.btnClose_mouseover = this.btnClose_mouseover.bind(this);
    this.btnClose_mouseleave = this.btnClose_mouseleave.bind(this);
  }

  btnClose_mouseover(){
    this.app.Cursor.el.classList.add('rotate');
  }
  btnClose_mouseleave(){
    this.app.Cursor.el.classList.remove('rotate');
  }

  link_mouseover(e) {
    const { iconId } = e.currentTarget.dataset;
    const currentIcon = this.icons.find(x => x.classList.contains(iconId));
    const { x, y, width} = e.currentTarget.getBoundingClientRect();
    const iconWidth = currentIcon.getBoundingClientRect().width;

    currentIcon.firstElementChild.style.width = '10vh';

    currentIcon.classList.add('active');
    currentIcon.style.left = `${(x - iconWidth) + (width / 2)}px`;
    currentIcon.style.top = `${y}px`;
  }
  
  link_mouseleave() {
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
    this.app.pages.home.hide();
    this.app.el.classList.add('black');
    this.el.classList.add('show');
    this.app.Cursor.el.classList.add('white');

    this.btnClose.addEventListener('click', this.hide.bind(this));
    this.btnClose.addEventListener('mouseover', this.btnClose_mouseover);
    this.btnClose.addEventListener('mouseleave', this.btnClose_mouseleave);

    this.links.forEach((el) => {
      el.addEventListener('click', (event) => {
        el.removeEventListener('mouseover', this.link_mouseover);
        el.removeEventListener('mouseleave', this.link_mouseleave);

        const { pageId, iconId } = event.currentTarget.dataset;
        const iconWrapper = this.icons.find(x => x.classList.contains(iconId));
        const { ratio } = iconWrapper.dataset;

        if (this.app.isMobile) {
          iconWrapper.firstElementChild.style.width = `${(window.innerHeight / 100) * ratio}px`;
        } else {
          iconWrapper.firstElementChild.style.width = `${(window.innerWidth / 100) * ratio}px`;
        }
        iconWrapper.classList.add('animate');
        
        iconWrapper.style.left = '50%';
        iconWrapper.style.top = '50%';
        iconWrapper.style.transform = 'translate3d(-50%,-50%,0)';
        
        this.app.Cursor.el.classList.remove('white');
        this.el.classList.add('hideLinks');
        this.gotoPage(pageId);
        
        setTimeout(() => {
          this.app.Cursor.el.classList.add('white');
          this.app.el.classList.remove('black');
          this.el.classList.remove('hideLinks');
          iconWrapper.classList.remove('active');
          iconWrapper.classList.remove('animate');
          iconWrapper.firstElementChild.style.width = '10vh';
          this.hide();
        }, 1500);
      });
    });

    this.links.forEach((el) => {
      el.addEventListener('mouseover', this.link_mouseover);
      el.addEventListener('mouseleave', this.link_mouseleave);
    });
  }
  
  hide() {
    this.app.pages[this.app.currentPage].show();
    this.app.el.classList.remove('black');
    this.app.Cursor.el.classList.remove('white');
    this.el.classList.remove('show');

    this.btnClose.removeEventListener('click', this.hide.bind(this));
    this.btnClose.removeEventListener('mouseover', this.btnClose_mouseover);
    this.btnClose.removeEventListener('mouseleave', this.btnClose_mouseleave);

    this.links.forEach((el) => {
      el.removeEventListener('mouseover', this.link_mouseover);
      el.removeEventListener('mouseleave', this.link_mouseleave);
    });
  }
}
