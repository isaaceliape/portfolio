
class Gamepad {
  constructor(app){
    this.app = app;
    this.gameLoop = this.gameLoop.bind(this);
    this.buttonPressed = this.buttonPressed.bind(this);
  }
  init(){
    window.addEventListener("gamepadconnected", this.gameLoop);
  }
  buttonPressed(b) {
    if (typeof(b) === "object") {
      return b.pressed;
    }
    return b === 1.0;
  }
  gameLoop(event){
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    if (!gamepads) {
      return;
    }
    var gp = gamepads[0];
    let state = Object.assign({}, this.state);

    // console.log('x');
    if (this.buttonPressed(gp.buttons[0])) {
      state.currentPage = "home";
      state.backgroundColor = "#fff";
      state.hideNav = true;
      state.blackFont = true;
      state.bgAnimation = true;
      state.cursor.color = "#000";
    }
    // console.log('■');
    if (this.buttonPressed(gp.buttons[2])) {
      state.currentPage = "services";
      state.backgroundColor = "#fff";
      state.hideNav = true;
      state.blackFont = true;
      state.bgAnimation = true;
      state.cursor.color = "#000";
    }
    // console.log('●');
    if (this.buttonPressed(gp.buttons[1])) {
      state.currentPage = "about";
      state.backgroundColor = "#fff";
      state.hideNav = true;
      state.blackFont = true;
      state.bgAnimation = true;
      state.cursor.color = "#000";
    }
    // console.log('▲');
    if (this.buttonPressed(gp.buttons[3])) {
      state.currentPage = "awards";
      state.backgroundColor = "#fff";
      state.hideNav = true;
      state.blackFont = true;
      state.bgAnimation = true;
      state.cursor.color = "#000";
    }
    // console.log('option');
    if (this.buttonPressed(gp.buttons[9])) {
      state.currentPage = "home";
      state.backgroundColor = "#000";
      state.hideNav = false;
      state.blackFont = false;
      state.bgAnimation = true;
      state.cursor.color = "#fff";
    }
    // console.log('left', state.cursor.position);
    if (this.buttonPressed(gp.buttons[14])) {
      state.cursor.position.x = (state.cursor.position.x - 10) < 0 ? 0 : state.cursor.position.x - 10 ;
      // console.log('state.cursor.position.x', state.cursor.position.x);
    }
    // console.log('right', state.cursor.position);
    if (this.buttonPressed(gp.buttons[15])) {
      state.cursor.position.x = (state.cursor.position.x + 10) > window.innerWidth ? window.innerWidth : state.cursor.position.x + 10 ;
      // console.log('state.cursor.position.x', state.cursor.position.x);
    }
    // console.log('top', state.cursor.position);
    if (this.buttonPressed(gp.buttons[12])) {
      state.cursor.position.y = (state.cursor.position.y - 10) < 0 ? 0 : state.cursor.position.y - 10 ;
    }
    // console.log('down', state.cursor.position);
    if (this.buttonPressed(gp.buttons[13])) {
      state.cursor.position.y = (state.cursor.position.y + 10) > window.innerHeight ? window.innerHeight : state.cursor.position.y + 10 ;
    }
    this.setState(state, () => {
      // console.log('pos', this.state.cursor.position);
    });

    requestAnimationFrame(this.gameLoop);
  }
}
export default Gamepad;