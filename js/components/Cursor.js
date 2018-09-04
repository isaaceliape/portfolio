
export default class Cursor {
  constructor(app) {
    this.app = app;
    this.el = app.el.querySelector('.cursor');

    window.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  onMouseMove(event) {
    const { pageX: x, pageY: y } = event;
    this.el.style.left = `${x}px`;
    this.el.style.top = `${y}px`;
  }
}
