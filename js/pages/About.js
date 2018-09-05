
export default class About {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('section.about');
    this.closeBtn = this.el.querySelector('.close');
    this.marquee = this.el.querySelector('.call-to-action .marquee');
    this.portrait = this.el.querySelector('.portrait');
    this.timer = '';

    this.hide = this.hide.bind(this);
    this.showPortrait = this.showPortrait.bind(this);

    if(!this.app.isMobile){
      this.marquee.addEventListener('mouseover', () => {
        this.app.Cursor.el.classList.add('white');
        this.el.classList.add('black');
      });
      
      this.marquee.addEventListener('mouseleave', () => {
        this.app.Cursor.el.classList.remove('white');
        this.el.classList.remove('black');
      });
      
      this.closeBtn.addEventListener('mouseover', () => {
        this.app.Cursor.el.classList.add('rotate');
      });
  
      this.closeBtn.addEventListener('mouseleave', () => {
        this.app.Cursor.el.classList.remove('rotate');
      });
    }

    this.closeBtn.addEventListener('click', this.hide);

  }
  showPortrait(){
    this.portrait.classList.add('show');
  }
  show() {
    this.el.classList.add('show');
    clearTimeout(this.timer);
    this.timer = setTimeout(this.showPortrait, 1500);
  }
  
  hide() {
    this.el.classList.remove('show');
    this.portrait.classList.remove('show');
    this.app.Cursor.el.classList.remove('rotate');
    this.app.Nav.gotoPage('home');
  }
}
