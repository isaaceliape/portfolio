
export default class About {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('.about');
  }
  open(){
    console.log('About::OPEN');
    this.el.classList.remove('hide');
  }
  close(){
    console.log('About::CLOSE');
    this.el.classList.add('hide');
  }
}
