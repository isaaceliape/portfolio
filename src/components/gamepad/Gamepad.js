function buttonPressed(b) {
  if (typeof (b) === 'object') return b.pressed;
  return b === 1.0;
}
class Gamepad {
  constructor(app) {
    this.app = app;
    this.animationLoop = null;
    this.gameLoop = this.gameLoop.bind(this);
    this.gamepadConnected = this.gamepadConnected.bind(this);
    this.gampadDisconnected = this.gampadDisconnected.bind(this);
  }

  init() {
    // console.log('gamepad');
    window.addEventListener('gamepadconnected', this.gamepadConnected);
    window.addEventListener('gampaddisconnected', this.gampadDisconnected);
  }
  gamepadConnected() {
    console.log('gamepad CONNECTED');
    this.animationLoop = requestAnimationFrame(this.gameLoop);
  }
  gampadDisconnected() {
    console.log('gamepad DISCONNECTED');
    this.cancelAnimationFrame(this.animationLoop);
  }
  gameLoop() {
    const gamepads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads;
    const gp = gamepads[0];

    if (!gamepads || !gp) return;

    const mainState = this.app.getMainState();
    let state = {};
    // state.cursor.position.x += Number(gp.axes[0].toFixed(1));
    // console.log(state.cursor.position.x);
    const buttonPressedPreset = {
      ...mainState,
      backgroundColor: '#fff',
      hideNav: true,
      blackFont: true,
      bgAnimation: true,
      cursor: {
        ...mainState.cursor,
        color: '#000',
      },
    };
    if (buttonPressed(gp.buttons[0])) {
      // console.log('x');
      state = {
        ...buttonPressedPreset,
        currentPage: 'home',
      };
    }
    // console.log('■');
    if (buttonPressed(gp.buttons[2])) {
      state = {
        ...buttonPressedPreset,
        currentPage: 'services',
      };
    }
    // console.log('●');
    if (buttonPressed(gp.buttons[1])) {
      state = {
        ...buttonPressedPreset,
        currentPage: 'about',
      };
    }
    // console.log('▲');
    if (buttonPressed(gp.buttons[3])) {
      state = {
        ...buttonPressedPreset,
        currentPage: 'awards',
      };
    }
    // console.log('option');
    if (buttonPressed(gp.buttons[9])) {
      state = {
        ...buttonPressedPreset,
        currentPage: 'home',
      };
    }
    // console.log('left', state.cursor.position);
    if (buttonPressed(gp.buttons[14])) {
      let { x } = mainState.cursor.position;
      x = x - 10 < 0 ? 0 : x - 10;
      state = {
        ...mainState,
        cursor: {
          ...mainState.cursor,
          position: {
            ...mainState.cursor.position,
            x,
          },
        },
      };
      // console.log(state.cursor.position);
    }
    // console.log('right', state.cursor.position);
    if (buttonPressed(gp.buttons[15])) {
      state = {
        ...mainState,
        cursor: {
          ...mainState.cursor,
          position: {
            ...mainState.cursor.position,
            x: mainState.cursor.position.x + 10,
          },
        },
      };
    }
    // console.log('top', state.cursor.position);
    if (buttonPressed(gp.buttons[12])) {
      let { y } = mainState.cursor.position;
      y = y - 10 < 0 ? 0 : y - 10;
      state = {
        ...mainState,
        cursor: {
          ...mainState.cursor,
          position: {
            ...mainState.cursor.position,
            y,
          },
        },
      };
    }
    // console.log('down', state.cursor.position);
    if (buttonPressed(gp.buttons[13])) {
      state = {
        ...mainState,
        cursor: {
          ...mainState.cursor,
          position: {
            ...mainState.cursor.position,
            y: mainState.cursor.position.y + 10,
          },
        },
      };
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

    this.app.setMainState(state);
    this.animationLoop = requestAnimationFrame(this.gameLoop);
  }
}
export default Gamepad;
