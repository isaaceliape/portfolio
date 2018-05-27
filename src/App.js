import React, { Component } from 'react';
import { Layer, Stage } from 'react-konva';

import Nav from './components/nav/Nav';
import Gamepad from './components/gamepad/Gamepad';
import { getScreenWidth, getScreenHeight, getOrientation } from './Helpers';
import Link from './components/link/Link';
import List from './components/list/List';
import Page from './components/page/Page';
import Button from './components/button/Button';
import Cursor from './components/cursor/Cursor';
import Marker from './components/canvas/Marker';
import Marquee from './components/link/Marquee';
import Container from './components/container/Container';
import Portrait from './components/portrait/Portrait';

import './App.css';
import tutorialImage from './assets/images/tutorial.png';
import perfilImage from './assets/images/perfil.jpg';

class App extends Component {
  constructor(props) {
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
      hidePortrait: true,
      projectPage: {
        percent: 0,
        gyroscope: 0,
        currentPos: 0,
        opened: false,
        currentItem: 0,
        backgroundColor: '#fff',
        listItens: [
          {
            title: 'sclp',
            tooltip: 'about',
            active: false,
            image: {
              src: '',
              path: '',
              active: false,
            },
            description: '',
            technologies: [],
            link: '',
          },
          {
            title: 'hpmagicwords',
            tooltip: 'speech api',
            active: false,
            image: {
              src: require('./assets/images/projects/hp_magic_works.png'),
              path: './assets/images/projects/hp_magic_works.png',
              active: false,
            },
            description: 'the first book written by people who’ve never written before.',
            technologies: [
              'html5/css3',
              'javascript',
              'custom framework',
            ],
            link: 'https://www.hpmagicwords.com.br/tool',
          },
          {
            title: 'gettyendless',
            tooltip: 'webGL',
            active: false,
            image: {
              src: require('./assets/images/projects/getty_endless_possibilities.png'),
              path: './assets/images/projects/getty_endless_possibilities.png',
              active: false,
            },
            description: 'creating protraits of famous people with gettyimages photos',
            technologies: [
              'html5/css3',
              'javascript',
              'webGL',
            ],
            link: 'http://www.gettyendless.com/',
          },
          {
            title: 'flplny',
            tooltip: 'responsive',
            active: false,
            image: {
              src: require('./assets/images/projects/flplny.png'),
              path: './assets/images/projects/flplny.png',
              active: false,
            },
            description: 'responsive semplice-based portfolio',
            technologies: [
              'html5/css3',
              'javascript',
              'animations',
              'wordpress',
            ],
            link: 'http://flplny.com/',
          },
          {
            title: 'fundacaolemann',
            tooltip: 'responsive',
            active: false,
            image: {
              src: require('./assets/images/projects/fundacao_lemann.png'),
              path: './assets/images/projects/fundacao_lemann.png',
              active: false,
            },
            description: 'cms and responsive website',
            technologies: [
              'html5/css3',
              'javascript',
              'wordpress',
            ],
            link: 'http://www.fundacaolemann.org.br/',
          },
        ],
      },
      easterEgg: {
        keyword: 'c+ps4',
        currentKey: '',
      },
      bgAnimation: false,
      gamepad: {
        goToDirection: 0,
        lastButtonPressed: 0,
      },
      changePage: {
        animationDuration: 1000,
      },
      cursor: {
        color: '#000',
        visible: true,
        rotation: false,
        position: {
          x: -100,
          y: -100,
        },
      },
      navHoverEl: {
        pos: {
          x: 0,
          y: 0,
        },
      },
      animateJobList: false,
      hideJobList: false,
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onResize = this.onResize.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onClickMenu = this.onClickMenu.bind(this);
    this.navItemHover = this.navItemHover.bind(this);
    this.getMainState = this.getMainState.bind(this);
    this.setMainState = this.setMainState.bind(this);
    this.onMouseOutCloseBtn = this.onMouseOutCloseBtn.bind(this);
    this.onMouseOverCloseBtn = this.onMouseOverCloseBtn.bind(this);

    window.app = this;
  }
  componentWillMount() {
    const isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/) !== null;

    if (!isMobile) {
      this.Gamepad = new Gamepad(this);
      this.Gamepad.init();
      window.addEventListener('keyup', this.onKeyUp);
      // window.addEventListener('mousemove', this.onMouseMove );
    }
    window.addEventListener('resize', this.onResize);
    this.onResize();

    this.setState({
      isMobile,
    });
  }
  onKeyUp(e) {
    const state = this.getMainState();

    // On press ESC
    if (e.keyCode === 27) {
      // state.hideNav = true;
      // state.backgroundColor = "#fff";
      // state.projectPage.opened = false;
      // state.blackFont = true;
      // state.currentPage = 'home';
      // state.hidePortrait = true;
      // state.cursor.color = '#000';
      // state.cursor.rotate = false;
      // state.bgAnimation = true;
      // state.hideJobList = false;
    }
    this.setState(state);
  }
  onResize() {
    this.setState({
      orientation: getOrientation(),
    });
  }
  onClickMenu() {
    const state = Object.assign({}, this.state);
    state.cursor.color = '#fff';
    state.hideNav = false;
    state.backgroundColor = '#000';
    state.blackFont = false;
    state.bgAnimation = true;
    state.hideJobList = true;
    this.setState(state);
  }
  onMouseOverCloseBtn() {
    const cursor = Object.assign({}, this.state.cursor);
    cursor.rotate = true;
    this.setState({
      cursor,
    });
  }
  onMouseOutCloseBtn() {
    const cursor = Object.assign({}, this.state.cursor);
    cursor.rotate = false;
    this.setState({
      cursor,
    });
  }
  setMainState(state, cb) {
    if (typeof cb === 'function') {
      this.setState(state, cb);
    } else {
      this.setState(state);
    }
  }
  getMainState() {
    // return  _.cloneDeep(this.state);
    return Object.assign({}, this.state);
  }
  navItemHover(pos) {
    this.setState({
      navHoverEl: {
        pos,
      },
    });
  }
  changePage(targetPage, animate) {
    const blackFont = targetPage !== 'home';
    const { animationDuration } = this.state.changePage;
    const cursor = Object.assign({}, this.state.cursor);
    const state = this.getMainState();
    if (animate) {
      cursor.color = '#000';
      state.currentPage = targetPage;
      state.bgAnimation = false;
      state.hideNav = true;
      state.animateJobList = false;
      state.blackFont = blackFont;
      state.expand = true;
      state.cursor = cursor;
      state.hidePortrait = true;
      this.setState(state);
      setTimeout(() => {
        state.backgroundColor = '#fff';
        state.expand = false;
        state.cursor.rotate = false;
        state.hidePortrait = false;
        state.navHoverEl = {
          pos: {
            x: -200,
            y: -200,
          },
        };
        this.setState(state);
      }, animationDuration);
    } else {
      state.cursor.rotate = false;
      state.currentPage = targetPage;
      state.hideNav = true;
      state.animateJobList = false;
      state.blackFont = true;
      state.backgroundColor = '#fff';
      state.cursor.color = '#000';
      state.hideJobList = false;
      this.setState(state);
    }
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
    const hideMenuButton = tooltipText.length > 0 || !hideNav || currentPage !== 'home';

    return (
      <div
        className={`App ${blackFontClass} ${bgAnimationClass} ${isMobileClass}`}
        style={{
          backgroundColor,
        }}
      >
        <Stage
          className="canvas"
          width={getScreenWidth()}
          height={getScreenHeight()}
        >
          <Layer>
            <Marker
              expand={this.state.expand}
              pos={this.state.navHoverEl.pos}
              isMobile={this.state.isMobile}
              animationDuration={this.state.changePage.animationDuration}
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
              onFocus={this.onMouseOverCloseBtn}
              onMouseOver={this.onMouseOverCloseBtn}
              onMouseOut={this.onMouseOutCloseBtn}
              onBlur={this.onMouseOutCloseBtn}
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
              state={this.state.projectPage}
              listItens={jobsList}
              setMainState={this.setMainState}
              getMainState={this.getMainState}
              isMobile={this.state.isMobile}
              hideJobList={this.state.hideJobList}
              changePage={this.changePage}
              currentPage={this.state.currentPage}
              animateJobList={this.state.animateJobList}
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
            <Portrait
              src={perfilImage}
              hide={this.state.hidePortrait}
            />
            <p className="description">
              sclp is a collection of isaac eliape’s work on web development and ui engineering
            </p>
            <Marquee
              setMainState={this.setMainState}
              getMainState={this.getMainState}
              currentPage={this.state.currentPage}
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
              hoverText="hello@sclp.co"
              href="mailto:hello@sclp.co?subject=site contact"
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
            <span>click here to enable gamepad flag</span>
            <img
              className="tutorial"
              src={tutorialImage}
              alt="tutorial"
            />
          </Page>
        </Container>
      </div>
    );
  }
}

export default App;
