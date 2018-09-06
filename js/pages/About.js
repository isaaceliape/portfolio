
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
    this.closeBtn_mouseover = this.closeBtn_mouseover.bind(this);
    this.closeBtn_mouseleave = this.closeBtn_mouseleave.bind(this);
    this.closeBtn_click = this.closeBtn_click.bind(this);

    if(!this.app.isMobile){
      this.marquee.addEventListener('mouseover', () => {
        this.app.Cursor.el.classList.add('white');
        this.el.classList.add('black');
      });
      
      this.marquee.addEventListener('mouseleave', () => {
        this.app.Cursor.el.classList.remove('white');
        this.el.classList.remove('black');
      });
    }

    this.closeBtn.addEventListener('click', this.closeBtn_click);

  }
  showPortrait(){
    this.portrait.classList.add('show');
  }
  closeBtn_mouseover(){
    this.app.Cursor.el.classList.add('rotate');
  }
  closeBtn_mouseleave(){
    this.app.Cursor.el.classList.remove('rotate');
  }
  closeBtn_click(){
    this.app.Nav.gotoPage('home');
  }
  show() {
    if(!this.app.isMobile){
      this.closeBtn.addEventListener('mouseover', this.closeBtn_mouseover);
      this.closeBtn.addEventListener('mouseleave', this.closeBtn_mouseleave);
    }

    this.el.classList.add('show');
    clearTimeout(this.timer);
    this.timer = setTimeout(this.showPortrait, 1000);
  }
  
  hide() {
    clearTimeout(this.timer);
    this.closeBtn.removeEventListener('mouseover', this.closeBtn_mouseover);
    this.closeBtn.removeEventListener('mouseleave', this.closeBtn_mouseleave);

    this.el.classList.remove('show');
    this.portrait.classList.remove('show');
    this.app.Cursor.el.classList.remove('rotate');
  }
}
