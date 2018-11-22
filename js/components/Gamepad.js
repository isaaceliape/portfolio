function buttonPressed(b) {
  if (typeof (b) === 'object') return b.pressed;
  return b === 1.0;
}

export default class Gamepad {
  constructor(app) {
    this.app = app;
    this.animationLoop = null;
    this.clearSelectedProjectTimer = null;
    this.lastPressedButton = '';
    this.projectAnimationIn = '';
    this.blockAnimation = false;
    this.pressedOutInstance = null;
    this.showGamepadInstructions = true;
    this.gamepadMessage = this.app.el.querySelector('.gamepad-message');

    this.gameLoop = this.gameLoop.bind(this);
    this.gamepadConnected = this.gamepadConnected.bind(this);
    this.lastPressedAction = this.lastPressedAction.bind(this);
    this.gampadDisconnected = this.gampadDisconnected.bind(this);
    this.clearSelectedProject = this.clearSelectedProject.bind(this);

    this.mouseover = new Event('mouseover');
    this.mouseleave = new Event('mouseleave');
    this.click = new Event('click');
  }

  init() {
    console.log('gamepad');
    window.addEventListener('gamepadconnected', this.gamepadConnected);
    window.addEventListener('gampaddisconnected', this.gampadDisconnected);
  }
  lastPressedAction(){
    this.lastPressedButton = '';
  }
  gamepadConnected() {
    console.log('gamepad CONNECTED');
    setTimeout(() => {
      this.gamepadMessage.style.opacity = 1;
      this.animationLoop = requestAnimationFrame(this.gameLoop);
    }, 2000);
  }
  gampadDisconnected() {
    console.log('gamepad DISCONNECTED');
    this.cancelAnimationFrame(this.animationLoop);
  }
  updateSelectedProject(){
    const targetProjectLink = this.app.pages.home.projectItens[this.app.currentProject];
    
    this.app.pages.home.projectItens.forEach(el => {
      el.dispatchEvent(this.mouseleave);
      el.classList.remove('stop');
    });

    targetProjectLink.dispatchEvent(this.mouseover);
    targetProjectLink.classList.add('stop');

    clearTimeout(this.lastPressedTimer);
    this.lastPressedTimer = setTimeout(this.lastPressedAction, 250);

  }
  clearSelectedProject(){
    this.app.pages.home.projectItens.forEach((el) => {
      el.dispatchEvent(this.mouseleave);
      el.classList.remove('stop');
    });
  }
  pressedOut(){
    console.log('pressedOut');
  }
  gameLoop() {
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads;
    const gp = gamepads[0];

    if (!gamepads || !gp) return;
    if (buttonPressed(gp.buttons[0])) {
      clearTimeout(this.pressedOutInstance);
      this.pressedOutInstance = setTimeout(() => {
        this.gamepadMessage.style.opacity = 0;
        console.log('x');

        if (this.app.pages.home.projectWrapper.classList.contains('show')) {
          this.app.pages.home.closeProject();
        } else {
          this.app.Nav.gotoPage('home');
        }
      }, 50);
    }
    if (buttonPressed(gp.buttons[2])) {
      clearTimeout(this.pressedOutInstance);
      this.pressedOutInstance = setTimeout(() => {
        this.gamepadMessage.style.opacity = 0;
        if(!this.blockAnimation && this.app.currentPage !== 'services'){
          console.log('■');
          this.blockAnimation = true;
          this.app.pages[this.app.currentPage].hide();
          this.app.Nav.show();
          this.app.Nav.icons.forEach((el) => {
            el.classList.remove('active');
          });
          this.app.Nav.links.forEach((el) => {
            el.classList.remove('active');
          });
          this.app.Nav.links[1].dispatchEvent(this.mouseover);
          this.app.Nav.icons[1].classList.add('active');
          
          setTimeout(() => {
            this.app.Nav.links[1].dispatchEvent(this.click);
            setTimeout(() => {
              console.log('OUT!');
              this.blockAnimation = false;
              this.app.Nav.links[1].dispatchEvent(this.mouseleave);
            }, (700));
          }, 700);
        }
      }, 50);
    }
    if (buttonPressed(gp.buttons[1])) {
      clearTimeout(this.pressedOutInstance);
      this.pressedOutInstance = setTimeout(() => {
        this.gamepadMessage.style.opacity = 0;
        if(!this.blockAnimation && this.app.currentPage !== 'about'){
          console.log('●');
          this.blockAnimation = true;
          this.app.pages[this.app.currentPage].hide();
          this.app.Nav.show();
          this.app.Nav.icons.forEach((el) => {
            el.classList.remove('active');
          });
          this.app.Nav.links.forEach((el) => {
            el.classList.remove('active');
          });
          this.app.Nav.links[0].dispatchEvent(this.mouseover);
          this.app.Nav.icons[0].classList.add('active');
          
          setTimeout(() => {
            this.app.Nav.links[0].dispatchEvent(this.click);
            setTimeout(() => {
              console.log('OUT!');
              this.blockAnimation = false;
              this.app.Nav.links[0].dispatchEvent(this.mouseleave);
            }, (700));
          }, 700);
        }
      }, 50);
    }
    if (buttonPressed(gp.buttons[3])) {
      clearTimeout(this.pressedOutInstance);
      this.pressedOutInstance = setTimeout(() => {
        this.gamepadMessage.style.opacity = 0;
        if(!this.blockAnimation && this.app.currentPage !== 'awards'){
          console.log('▲');
          this.blockAnimation = true;
          this.app.pages[this.app.currentPage].hide();
          this.app.Nav.show();
          this.app.Nav.icons.forEach((el) => {
            el.classList.remove('active');
          });
          this.app.Nav.links.forEach((el) => {
            el.classList.remove('active');
          });
          this.app.Nav.links[2].dispatchEvent(this.mouseover);
          this.app.Nav.icons[2].classList.add('active');
          
          setTimeout(() => {
            this.app.Nav.links[2].dispatchEvent(this.click);
            setTimeout(() => {
              console.log('OUT!');
              this.blockAnimation = false;
              this.app.Nav.links[2].dispatchEvent(this.mouseleave);
            }, (700));
          }, 700);
        }
      }, 50);
    }
    if (buttonPressed(gp.buttons[9])) {
      clearTimeout(this.pressedOutInstance);
      this.pressedOutInstance = setTimeout(() => {
        this.gamepadMessage.style.opacity = 1;
        console.log('option');
      }, 50);
    }
    if (buttonPressed(gp.buttons[8])) {
      clearTimeout(this.pressedOutInstance);
      this.pressedOutInstance = setTimeout(() => {
        this.gamepadMessage.style.opacity = 0;
        console.log('share');
      }, 50);
    }
    if (buttonPressed(gp.buttons[14])) {
      clearTimeout(this.pressedOutInstance);
      this.pressedOutInstance = setTimeout(() => {
        this.gamepadMessage.style.opacity = 0;
        if (this.app.currentPage === 'home') {
          console.log('left');
          this.lastPressedButton = 'left';
  
          if (this.app.pages.home.projectWrapper.classList.contains('show')) {
            this.app.pages.home.closeProject();
          }
        }
      }, 50);
      
    }
    if (buttonPressed(gp.buttons[15])) {
      clearTimeout(this.pressedOutInstance);
      this.pressedOutInstance = setTimeout(() => {
        this.gamepadMessage.style.opacity = 0;
        if (this.app.currentPage === 'home') {
          console.log('right');
          this.lastPressedButton = 'right';
          const targetProjectLink = this.app.pages.home.projectItens[this.app.currentProject];
  
          clearTimeout(this.lastPressedTimer);
          this.lastPressedTimer = setTimeout(this.lastPressedAction, 250);
  
          if (targetProjectLink.classList.contains('white')) {
            clearTimeout(this.clearSelectedProjectTimer);
            targetProjectLink.dispatchEvent(this.click);
            console.log(targetProjectLink);
          }
        }
      }, 50);
    }
    if (buttonPressed(gp.buttons[12])) {
      clearTimeout(this.pressedOutInstance);
      this.pressedOutInstance = setTimeout(() => {
        this.gamepadMessage.style.opacity = 0;
        if (this.app.currentPage === 'home') {
          console.log('top');
          this.lastPressedButton = 'top';
          this.app.currentProject = (this.app.currentProject - 1) < 0 ? this.app.projects.length - 1 : this.app.currentProject - 1;
          
          this.updateSelectedProject();
  
          clearTimeout(this.clearSelectedProjectTimer);
          this.clearSelectedProjectTimer = setTimeout(this.clearSelectedProject, 2000);
        }
      }, 50);
    }
    if (buttonPressed(gp.buttons[13])) {
      clearTimeout(this.pressedOutInstance);
      this.pressedOutInstance = setTimeout(() => {
        this.gamepadMessage.style.opacity = 0;
        if (this.app.currentPage === 'home') {
          console.log('down');
          this.lastPressedButton = 'down';
          this.app.currentProject = (this.app.currentProject + 1) > (this.app.projects.length - 1) ? 0 : this.app.currentProject + 1;
          
          this.updateSelectedProject();
  
          clearTimeout(this.clearSelectedProjectTimer);
          this.clearSelectedProjectTimer = setTimeout(this.clearSelectedProject, 2000);
        }
      }, 50);
    }

    // ANALOGIC CONTROLLING

    // state.cursor.position.x = .a
    // let { x, y } = mainState.cursor.position;
    // const gpX = Number(gp.axes[0].toFixed(2)) * 20;
    // x = x + gpX < 0 ? 0 : x + gpX;
    // x = x + gpX > window.innerWidth ? window.innerWidth : x + gpX;

    // const gpY = Number(gp.axes[1].toFixed(2)) * 20;
    // y = y + gpY > window.innerHeight ? window.innerHeight : y + gpY;
    // y = y + gpY < 0 ? 0 : y + gpY;

    // state = {
    //   ...mainState,
    //   cursor: {
    //     ...mainState.cursor,
    //     position: {
    //       ...mainState.cursor.position,
    //       x,
    //       y,
    //     },
    //   },
    // };
    this.animationLoop = requestAnimationFrame(this.gameLoop);
  }
}
