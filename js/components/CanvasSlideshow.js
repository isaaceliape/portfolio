import * as PIXI from 'pixi.js';
import { TweenMax, Cubic} from 'gsap';

export default class CanvasSlideshow{
  constructor(options){
    //  OPTIONS
    /// ---------------------------      
    this.options                     = options || {};
    this.options.stageWidth          = this.options.hasOwnProperty('stageWidth') ? this.options.stageWidth : window.innerWidth;
    this.options.stageHeight         = this.options.hasOwnProperty('stageHeight') ? this.options.stageHeight : window.innerHeight;
    this.options.pixiSprites         = this.options.hasOwnProperty('sprites') ? this.options.sprites : [];
    this.options.centerSprites       = this.options.hasOwnProperty('centerSprites') ? this.options.centerSprites : false;
    this.options.autoPlay            = this.options.hasOwnProperty('autoPlay') ? this.options.autoPlay : true;
    this.options.autoPlaySpeed       = this.options.hasOwnProperty('autoPlaySpeed') ? this.options.autoPlaySpeed : [10, 3];
    this.options.fullScreen          = this.options.hasOwnProperty('fullScreen') ? this.options.fullScreen : true;
    this.options.displacementImage   = this.options.hasOwnProperty('displacementImage') ? this.options.displacementImage : '';
    this.options.displaceAutoFit     = this.options.hasOwnProperty('displaceAutoFit')  ?  this.options.displaceAutoFit : false; 
    this.options.wacky               = this.options.hasOwnProperty('wacky') ? this.options.wacky : false;
    this.options.interactive         = this.options.hasOwnProperty('interactive') ? this.options.interactive : false;
    this.options.interactionEvent    = this.options.hasOwnProperty('interactionEvent') ? this.options.interactionEvent : '';
    this.options.displacementCenter  = this.options.hasOwnProperty('displacementCenter') ? this.options.displacementCenter : false;
    this.options.dispatchPointerOver = this.options.hasOwnProperty('dispatchPointerOver') ? this.options.dispatchPointerOver : false;
    this.options.isMobile            = this.options.hasOwnProperty('isMobile') ? this.options.isMobile : false;
    this.images = [];

    //  PIXI VARIABLES
    /// ---------------------------    
    this.renderer = new PIXI.autoDetectRenderer( this.options.stageWidth, this.options.stageHeight, { transparent: true });
    this.stage = new PIXI.Container();
    this.slidesContainer = new PIXI.Container();
    let colorMatrix = new PIXI.filters.ColorMatrixFilter();
    colorMatrix.greyscale(0.3);
    this.slidesContainer.filters = [colorMatrix];
    this.displacementSprite = new PIXI.Sprite.fromImage( this.options.displacementImage );
    this.displacementFilter = new PIXI.filters.DisplacementFilter( this.displacementSprite );


    /// ---------------------------
    //  DEFAULT RENDER/ANIMATION
    /// ---------------------------        
    if ( this.options.autoPlay === true ) {

      var ticker = new PIXI.ticker.Ticker();

      ticker.autoStart = this.options.autoPlay;

      ticker.add(() => {

        this.displacementSprite.x += 4;
        this.displacementSprite.y += 4;
        this.displacementSprite.scale = {x: 0.8, y: 0.8};
        this.renderer.render( this.stage );

      });

    }  else {

      var render = new PIXI.ticker.Ticker();

      render.autoStart = true;

      render.add(() => {
        this.renderer.render( this.stage );
      });

      this.showImage = this.showImage.bind(this);
    }

    this.init();
  }

  /// ---------------------------
  //  INITIALISE PIXI
  /// ---------------------------      
  initPixi() {

    // Add canvas to the HTML
    //document.body.appendChild( renderer.view );
    document.getElementById('js-canvas-wrapper').appendChild(this.renderer.view);

    // Add child container to the main container 
    this.stage.addChild( this.slidesContainer );

    // Enable Interactions
    this.stage.interactive = true; 

    // Fit renderer to the screen
    if ( this.options.fullScreen === true ) {
      this.renderer.view.style.objectFit = 'cover';
      this.renderer.view.style.width     = '100%';
      this.renderer.view.style.height    = '100%';
      this.renderer.view.style.top       = '50%';
      this.renderer.view.style.left      = '50%';
      this.renderer.view.style.webkitTransform = 'translate( -50%, -50% ) scale(1.1)';
      this.renderer.view.style.transform = 'translate( -50%, -50% ) scale(1.1)';           
    } else {
      this.renderer.view.style.maxWidth  = '100%';
      this.renderer.view.style.top       = '50%';
      this.renderer.view.style.left      = '50%';
      this.renderer.view.style.webkitTransform = 'translate( -50%, -50% )';
      this.renderer.view.style.transform = 'translate( -50%, -50% )';          
    }

    this.displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

    // Set the filter to this.stage and set some default values for the animation
    this.stage.filters = [this.displacementFilter];        

    if ( this.options.autoPlay === false ) {
      this.displacementFilter.scale.x = 0;
      this.displacementFilter.scale.y = 0;
    }

    if ( this.options.wacky === true ) {

      this.displacementSprite.anchor.set(0.5);
      this.displacementSprite.x = this.renderer.width / 2;
      this.displacementSprite.y = this.renderer.height / 2; 
    }

    this.displacementSprite.scale.x = 2;
    this.displacementSprite.scale.y = 2;

    // PIXI tries to fit the filter bounding box to the renderer so we optionally bypass
    this.displacementFilter.autoFit = this.options.displaceAutoFit;

    this.stage.addChild( this.displacementSprite );

  }
  expandImage(id){
    const image = this.images.find(x => x.id === id);
    if (this.options.isMobile) {
      image.width = (window.innerWidth / 100) * 80;
      image.height = image.width / 1.6;
      const targetHeight = (window.innerHeight / 4);
      TweenMax.to(image.scale, .3,{ x: 0.2, y: 0.2, ease: Cubic.easeInOut });
      TweenMax.to(image, .3,{ y: targetHeight, ease: Cubic.easeInOut });
    } else {
      TweenMax.to(image.scale, .3,{ x: 0.7, y: 0.7, ease: Cubic.easeInOut });
    }
  }
  resetImageSize(id){
    const image = this.images.find(x => x.id === id);
    if (this.options.isMobile) {
      image.width = window.innerWidth / 2;
      image.height = image.width / 1.6;
      image.y = this.renderer.height / 2;
    } else {
      TweenMax.to(image.scale, .3,{ x: 0.5, y: 0.5, ease: Cubic.easeInOut });
    }
  }
  showImage(id) {
    const image = this.images.find(x => x.id === id);
    this.hideImages();
    if (this.options.isMobile) {
      image.width = (window.innerWidth / 100) * 80;
      image.height = image.width / 1.6;
    }
    image.alpha = 1;
  }

  hideImages() {
    this.images.forEach((img) => {
      img.alpha = 0;
    });
  }

  /// ---------------------------
  //  LOAD SLIDES TO CANVAS
  /// ---------------------------
  loadPixiSprites( sprites ) {

    var rSprites = this.options.sprites;

    for ( var i = 0; i < rSprites.length; i++ ) {

      var texture   = new PIXI.Texture.fromImage( sprites[i].image );
      var image     = new PIXI.Sprite( texture );
      
      if ( this.options.centerSprites === true ) {
        image.anchor.set(0.5);
        image.x = this.renderer.width / 2;
        image.y = this.renderer.height / 2;
        image.scale = {x: 0.5, y: 0.5};
        image.alpha = 0;
        image.id = sprites[i].id;
      }

      this.images.push(image);
      this.slidesContainer.addChild( image );
    } 
  }

  init() {
    this.initPixi();
    this.loadPixiSprites( this.options.pixiSprites );
  }
}

