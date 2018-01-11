import React, { Component } from 'react';
import { Layer, Stage } from 'react-konva';

import Nav from './components/nav/Nav';
import Link from './components/link/Link';
import List from './components/list/List';
import Page from './components/page/Page';
import Button from './components/button/Button';
import Cursor from './components/cursor/Cursor';
import Marker from './components/canvas/Marker';
import Marquee from './components/link/Marquee';
import Container from './components/container/Container';

import './App.css';
import tutorialImage from './assets/images/tutorial.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      beta: 0,
      title: 'Teste',
      fadeBg: true,
      expand: false,
      percent: 0,
      hideNav: true,
      backgroundColor: '#fff',
      isMobile: false,
      blackFont: true,
      orientation: 'landscape',
      tooltipText: '',
      currentPage: 'home',
      menuHover: false,
      easterEgg: {
        keyword: 'c+ps4',
        currentKey: '',
      },
      bgAnimation: false,
      gamepad:{
        goToDirection: 0,
        lastButtonPressed: 0,
      },
      changePage: {
        animationDuration: 500,
      },
      cursor: {
        color: '#000',
        visible: true,
        rotation: false,
        position: {
          x: -100,
          y: -100,
        }
      },
      navHoverEl: {
        pos: {
          x: 0,
          y: 0,
        }
      },
      animateJobList: false,
      jobsList: [
        {
          title: 'sclp',
          link: '',
          tooltip: 'about',
          active: false,
        },
        {
          title: 'hpmagicwords',
          link: 'https://www.hpmagicwords.com.br/tool',
          tooltip: 'speech api',
          active: false,
        },
        {
          title: 'gettyendless',
          link: 'http://www.gettyendless.com/',
          tooltip: 'webGL',
          active: false,
        },
        {
          title: 'flplny',
          link: 'http://flplny.com/',
          tooltip: 'responsive',
          active: false,
        },
        {
          title: 'fundacaolemann',
          link: 'http://www.fundacaolemann.org.br/',
          tooltip: 'website',
          active: false,
        },
      ],
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.onResize = this.onResize.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onClickMenu = this.onClickMenu.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.navItemHover = this.navItemHover.bind(this);
    this.getMainState = this.getMainState.bind(this);
    this.setMainState = this.setMainState.bind(this);
    this.buttonPressed = this.buttonPressed.bind(this);
    this.setTooltipText = this.setTooltipText.bind(this);
    this.getScreenWidth = this.getScreenWidth.bind(this);
    this.getScreenHeight = this.getScreenHeight.bind(this);
    this.onMouseOutCloseBtn = this.onMouseOutCloseBtn.bind(this);
    this.onMouseOverCloseBtn = this.onMouseOverCloseBtn.bind(this);
    this.changeCursorPosition = this.changeCursorPosition.bind(this);

    this.buttonPressedStatus = false;

    window.app = this;
  }
  componentWillMount(){
    const isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/) !== null;
    const animationDuration = isMobile ? 1500 : 1000;

    if(!isMobile){
      window.addEventListener("gamepadconnected", this.gameLoop);
      window.addEventListener("keyup", this.onKeyUp);
      window.addEventListener('mousemove', this.onMouseMove );
    }
    window.addEventListener('resize', this.onResize);
    this.onResize();

    this.setState({
      isMobile,
      changePage: {
        animationDuration,
      }
    });
  }
  onMouseMove(event){
    const state = Object.assign({}, this.state);
    state.cursor.position.x = event.pageX;
    state.cursor.position.y = event.pageY;
    this.setState(state, () => {
      // console.log(this.state.cursor.position.x, this.state.cursor.position.y);
    });
  }
  onKeyUp(e){
    let letter = '';
    let state = Object.assign({}, this.state);
    if(e.keyCode === 224 || e.keyCode === 91){
      letter = 'c+';
    }
    if(e.keyCode === 27){
      state.hideNav = true;
      state.backgroundColor = "#fff";
      state.blackFont = true;
    }
    
    if(this.state.easterEgg.currentKey.substring(0,2) === 'c+' ){
      switch (e.keyCode) {
        case 80:
          letter = this.state.easterEgg.currentKey + 'p';
          break;
        case 83:
          letter = this.state.easterEgg.currentKey + 's';
          break;
        case 52:
          letter = this.state.easterEgg.currentKey + '4';
          break;
        default:
          break;
      }
    }
    if(letter === this.state.easterEgg.keyword){
      letter = '';
      // this.changePage('easterEgg');
      this.setState({
        currentPage: 'easterEgg',
        bgAnimation: true,
        backgroundColor: '#f2f2f2',
      });
    }
    state.easterEgg.currentKey = letter;
    this.setState(state);
  }
  onResize(){
    var mql = window.matchMedia("(orientation: landscape)");
    const orientation = mql.matches ? 'landscape' : 'portrait';
    this.setState({
      orientation,
    });
    // console.log('orientation', orientation);
    // console.log('getScreenHeight', this.getScreenHeight());
  }
  getScreenWidth(){
    const { orientation } = this.state;
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if(iOS){
      return orientation === 'landscape' ? window.screen.height : window.screen.width;
    }
    return window.innerWidth;
  }
  getScreenHeight(){
    const { orientation } = this.state;
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if(iOS){
      return orientation === 'landscape' ? window.screen.width : window.screen.height;
    }
    return window.innerHeight;
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

    if (this.buttonPressed(gp.buttons[0])) {
      // console.log('x');
      state.currentPage = "home";
      state.backgroundColor = "#fff";
      state.hideNav = true;
      state.blackFont = true;
      state.bgAnimation = true;
      state.cursor.color = "#000";
    }
    if (this.buttonPressed(gp.buttons[2])) {
      // console.log('■');
      state.currentPage = "services";
      state.backgroundColor = "#fff";
      state.hideNav = true;
      state.blackFont = true;
      state.bgAnimation = true;
      state.cursor.color = "#000";
    }
    if (this.buttonPressed(gp.buttons[1])) {
      // console.log('●');
      state.currentPage = "about";
      state.backgroundColor = "#fff";
      state.hideNav = true;
      state.blackFont = true;
      state.bgAnimation = true;
      state.cursor.color = "#000";
    }
    if (this.buttonPressed(gp.buttons[3])) {
      // console.log('▲');
      state.currentPage = "awards";
      state.backgroundColor = "#fff";
      state.hideNav = true;
      state.blackFont = true;
      state.bgAnimation = true;
      state.cursor.color = "#000";
    }
    if (this.buttonPressed(gp.buttons[9])) {
      // console.log('option');
      state.currentPage = "home";
      state.backgroundColor = "#000";
      state.hideNav = false;
      state.blackFont = false;
      state.bgAnimation = true;
      state.cursor.color = "#fff";
    }
    if (this.buttonPressed(gp.buttons[14])) {
      // console.log('left', state.cursor.position);
      state.cursor.position.x = (state.cursor.position.x - 10) < 0 ? 0 : state.cursor.position.x - 10 ;
      // console.log('state.cursor.position.x', state.cursor.position.x);
    }
    if (this.buttonPressed(gp.buttons[15])) {
      // console.log('right', state.cursor.position);
      state.cursor.position.x = (state.cursor.position.x + 10) > window.innerWidth ? window.innerWidth : state.cursor.position.x + 10 ;
      // console.log('state.cursor.position.x', state.cursor.position.x);
    }
    if (this.buttonPressed(gp.buttons[12])) {
      // console.log('top', state.cursor.position);
      state.cursor.position.y = (state.cursor.position.y - 10) < 0 ? 0 : state.cursor.position.y - 10 ;
    }
    if (this.buttonPressed(gp.buttons[13])) {
      // console.log('down', state.cursor.position);
      state.cursor.position.y = (state.cursor.position.y + 10) > window.innerHeight ? window.innerHeight : state.cursor.position.y + 10 ;
    }
    this.setState(state, () => {
      // console.log('pos', this.state.cursor.position);
    });

    requestAnimationFrame(this.gameLoop);
  }
  changePage(targetPage, animate){
    const blackFont = targetPage !== 'home';
    const { animationDuration } = this.state.changePage;
    let cursor = Object.assign({}, this.state.cursor);
    if(animate) {
      cursor.color = '#fff';
      this.setState({
        currentPage: targetPage,
        bgAnimation: false,
        hideNav: true,
        animateJobList: false,
        blackFont,
        expand: true,
        cursor,
      });
      setTimeout(() => {
        cursor.color = '#000';
        cursor.rotate = false;
        this.setState({
          backgroundColor: '#fff',
          expand: false,
          cursor,
          navHoverEl: {
            pos: {
              x: -200,
              y: -200,
            }
          },
        })
      }, animationDuration);
    } else {
      cursor.rotate = false;
      this.setState({
        currentPage: targetPage,
        hideNav: true,
        animateJobList: false,
        blackFont: true,
        backgroundColor: '#fff',
        cursor,
      });
    }
  }
  changeCursorPosition(position){
    let cursor = Object.assign({}, this.state.cursor);
    cursor.position = position;
    this.setState({
      cursor,
    }, () => {
      // console.log('changeCursorPosition', this.state.cursor);
    });
  }
  onClickMenu(){
    let cursor = Object.assign({}, this.state.cursor);
    cursor.color = '#fff';
    this.setState({
      hideNav: false,
      backgroundColor: '#000',
      blackFont: false,
      bgAnimation: true,
      cursor,
    }, () => {
      // console.log(this.state.cursor);
    });
  }
  setMainState(state, cb){
    if (typeof cb === "function") {
      this.setState(state, cb);
    } else {
      this.setState(state);
    }
  }
  setTooltipText(tooltipText){
    this.setState({
      tooltipText,
    });
  }
  onMouseOverCloseBtn(){
    let cursor = Object.assign({}, this.state.cursor);
    cursor.rotate = true;
    this.setState({
      cursor,
    });
  }
  onMouseOutCloseBtn(){
    let cursor = Object.assign({}, this.state.cursor);
    cursor.rotate = false;
    this.setState({
      cursor,
    });
  }
  navItemHover(pos){
    this.setState({
      navHoverEl:{
        pos,
      }
    })
  }
  getMainState(){
    return Object.assign({}, this.state);
  }
  render() {
    const {
      tooltipText,
      hideNav,
      currentPage,
      jobsList,
      blackFont,
      bgAnimation,
      isMobile,
      backgroundColor,
    } = this.state;

    const bgAnimationClass = bgAnimation ? 'animation' : '';
    const blackFontClass = blackFont ? 'blackFont' : '';
    const isMobileClass = isMobile ? 'isMobile' : '';
    const hideMenuButton = tooltipText.length > 0 || !hideNav || currentPage !== "home";

    return (
      <div
        className={`App ${blackFontClass} ${bgAnimationClass} ${isMobileClass}`}
        style={{
          backgroundColor,
        }}
      >
        <Stage
          className='canvas'
          width={this.getScreenWidth()}
          height={this.getScreenHeight()}
        >
          <Layer>
            <Marker
              expand={this.state.expand}
              pos={this.state.navHoverEl.pos}
              isMobile={this.state.isMobile}
              animationDuration={this.state.changePage.animationDuration}
              getScreenWidth={this.getScreenWidth}
              getScreenHeight={this.getScreenHeight}
            />
          </Layer>
        </Stage>
        <Cursor
          rotate={this.state.cursor.rotate}
          size={this.state.cursor.size}
          color={this.state.cursor.color}
          isMobile={this.state.isMobile}
          visible={this.state.cursor.visible}
          gamepad={this.state.gamepad.goToDirection}
          posY={this.state.cursor.position.y}
          posX={this.state.cursor.position.x}
          changeCursorPosition={this.changeCursorPosition}
        />
        <Container>
          <Button
            text="menu"
            hide={hideMenuButton}
            onClick={this.onClickMenu}
            className="menu"
          />
          {!hideNav &&
            <Button
              text="close"
              className="close"
              onClick={() => {
                this.changePage('home', false);
              }}
              onMouseOver={this.onMouseOverCloseBtn}
              onMouseOut={this.onMouseOutCloseBtn}
            />
          }
          <Nav
            changePage={this.changePage}
            navItemHover={this.navItemHover}
            hide={hideNav}
          />
          <Page
            onMouseOverCloseBtn={this.onMouseOverCloseBtn}
            onMouseOutCloseBtn={this.onMouseOutCloseBtn}
            pageName="home"
            currentPage={currentPage}
          >
            <List
              listItens={jobsList}
              onHoverJob={this.onHoverJob}
              setMainState={this.setMainState}
              setTooltipText={this.setTooltipText}
              isMobile={this.state.isMobile}
              changePage={this.changePage}
              animateJobList={this.state.animateJobList}
              hide={hideNav}
              orientation={this.state.orientation}
            />
            <span className="tooltip">{tooltipText}</span>
          </Page>
          <Page
            onMouseOverCloseBtn={this.onMouseOverCloseBtn}
            onMouseOutCloseBtn={this.onMouseOutCloseBtn}
            pageName="about"
            currentPage={currentPage}
            closePage={this.changePage}
          >
            <p className="description">sclp is a collection of isaac eliape’s work on web development and ui engineering</p>
            <Marquee
              setMainState={this.setMainState}
              getMainState={this.getMainState}
            >
              <a
                href="https://linkedin.com/in/isaaceliape"
                target="_blank"
                className="linkedin"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </Marquee>

            <Link
              hoverText='hello@sclp.co'
              href='mailto:hello@sclp.co?subject=site contact'
              setMainState={this.setMainState}
              getMainState={this.getMainState}
            >
              contact
            </Link>
          </Page>
          <Page
            onMouseOverCloseBtn={this.onMouseOverCloseBtn}
            onMouseOutCloseBtn={this.onMouseOutCloseBtn}
            pageName="services"
            currentPage={currentPage}
            closePage={this.changePage}
          >
            <ul className="services-list">
              <li className="services-list-item">ui engenneering</li>
              <li className="services-list-item">web applications  </li>
              <li className="services-list-item">single page apps</li>
              <li className="services-list-item">landing pages</li>
              <li className="services-list-item">animations</li>
              <li className="services-list-item">api integrations</li>
              <li className="services-list-item">css/html</li>
              <li className="services-list-item">javascript</li>
              <li className="services-list-item">cms</li>
            </ul>
          </Page>
          <Page
            onMouseOverCloseBtn={this.onMouseOverCloseBtn}
            onMouseOutCloseBtn={this.onMouseOutCloseBtn}
            pageName="awards"
            currentPage={currentPage}
            closePage={this.changePage}
          >
            <ul className="awards-list">
              <li className="awards-list-item">2 cannes lions</li>
              <li className="awards-list-item">3 awwards</li>
              <li className="awards-list-item">1 css awards</li>
              <li className="awards-list-item">1 css light</li>
              <li className="awards-list-item">1 css nectar</li>
              <li className="awards-list-item">1 site inspire</li>
              <li className="awards-list-item">2 fwa</li>
            </ul>
          </Page>
          <Page
            onMouseOverCloseBtn={this.onMouseOverCloseBtn}
            onMouseOutCloseBtn={this.onMouseOutCloseBtn}
            pageName="easterEgg"
            currentPage={currentPage}
            closePage={() => {
              const state = Object.assign({}, this.state);
              state.currentPage = 'home';
              state.backgroundColor = '#fff';
              state.cursor.rotation = false;
              this.setState({
                state,
              });
            }}
          >
            <p className="instructions">plug a ps4 controller to interact with this site.</p>
            <marquee>click here to enable gamepad flag</marquee>
            <img
              className="tutorial"
              src={tutorialImage}
            />
          </Page>
        </Container>
      </div>
    );
  }
}

export default App;
