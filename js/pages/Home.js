export default class Home {
  constructor(app) {
    this.app = app;
    this.el = this.app.el.querySelector('section.home');
    this.projectItens = [...this.el.querySelectorAll('.project-item')];
    this.projectImages = [...this.el.querySelectorAll('.project-image')];

    this.projectItens.forEach((el) => {
      el.addEventListener('mouseover', (event) => {
        const { projectId } = event.currentTarget.dataset;
        this.projectImages.forEach((img) => {
          img.classList.remove('show');
        });
        const image = this.projectImages.find(x => x.dataset.projectId === projectId);

        image.classList.add('show');
        this.el.classList.add('black');
        this.app.cursor.classList.add('white');
        event.currentTarget.classList.add('white');
      });
      
      el.addEventListener('mouseleave', (event) => {
        event.currentTarget.classList.remove('white');
        this.el.classList.remove('black');
        this.app.cursor.classList.remove('white');
        this.projectImages.forEach((img) => {
          img.classList.remove('show');
        });
      });
    });
  }

  show() {
    this.el.classList.add('show');
  }

  hide() {
    this.el.classList.remove('show');
  }

  open() {
  }

  close() {
  }
}
