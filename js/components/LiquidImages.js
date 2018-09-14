
import CanvasSlideshow from './CanvasSlideshow';

export default class LiquidImages{
  constructor(app){
    this.app = app;
    this.canvas = new CanvasSlideshow({
      isMobile: this.app.isMobile,
      sprites: this.app.projects,
      centerSprites: true,
      displacementImage: '../../../assets/images/pattern-clouds.jpg',
      autoPlay: true,
      autoPlaySpeed: [0, 6],
      interactive: true,
      displaceAutoFit: false,
      dispatchPointerOver: true // restarts pointerover event after click 
    });
  }
}