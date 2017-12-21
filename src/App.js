import React, { Component } from 'react';
import { TweenMax } from 'gsap';
import Button from './components/button/Button';
import Container from './components/container/Container';
import Page from './components/page/Page';
import Home from './components/page/Home';
import Nav from './components/nav/Nav';
import List from './components/list/List';
import Cursor from './components/cursor/Cursor';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Teste',
      currentPage: 'home',
      hideNav: true,
      whiteBg: false,
      blackFont: false,
      tooltipText: '',
      isMobile: false,
      currentCursor: '+',
      cursor: {
        size: 'small',
        type: '+',
        rotation: false,
        color: '#fff',
      },
      animateJobList: true,
      jobsList: [
        {
          title: 'sclp',
          link: '',
          tooltip: 'about',
          active: false,
        },
        {
          title: 'hpmagicwords',
          link: 'https://www.hpmagicwords.com.br/',
          tooltip: 'website',
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
    this.changePage = this.changePage.bind(this);
    this.onClickMenu = this.onClickMenu.bind(this);
    this.onMouseOverCloseBtn = this.onMouseOverCloseBtn.bind(this);
    this.onMouseOutCloseBtn = this.onMouseOutCloseBtn.bind(this);
    this.setTooltipText = this.setTooltipText.bind(this);
    this.setCursor = this.setCursor.bind(this);
  }
  componentDidMount(){
    const isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/) !== null;
    this.setState({
      isMobile,
    });
  }
  setCursor(currentCursor){
    this.setState({
      currentCursor,
    });
  }
  changePage(targetPage, expandCursor){
    const whiteBg = targetPage !== 'home';
    const blackFont = targetPage !== 'home';
    if(expandCursor){
      this.setState({
        currentPage: targetPage,
        hideNav: true,
        animateJobList: false,
        blackFont,
        cursor: {
          size: 'bigger',
          color: '#fff',
          rotate: false,
        },
      });
      setTimeout(() => {
        this.setState({
          whiteBg,
          cursor: {
            size: 'small',
            color: '#000',
          },
          currentCursor: '+',
        })
      },1000);
    } else {
      this.setState({
        currentPage: targetPage,
        hideNav: true,
        animateJobList: false,
        blackFont,
        whiteBg,
        cursor: {
          size: 'small',
          rotate: false,
        },
      });
    }
  }
  onClickMenu(){
    this.setState({
      hideNav: false,
    });
  }
  setTooltipText(tooltipText){
    this.setState({
      tooltipText,
    });
  }
  onMouseOverCloseBtn(){
    this.setState({
      cursor: {
        rotate: true,
      }
    });
  }
  onMouseOutCloseBtn(){
    this.setState({
      cursor: {
        rotate: false,
      }
    });
  }
  render() {
    const {
      tooltipText,
      hideNav,
      currentPage,
      whiteBg,
      jobsList,
      blackFont,
    } = this.state;
    const whiteBgClass = whiteBg ? 'white' : '';
    const blackFontClass = blackFont ? 'blackFont' : '';
    const hideMenuButton = tooltipText.length > 0 || !hideNav || currentPage !== "home";
    return (
      <div className={`App ${whiteBgClass} ${blackFontClass}`}>
        <Cursor
          rotate={this.state.cursor.rotate}
          currentCursor={this.state.currentCursor}
          size={this.state.cursor.size}
          color={this.state.cursor.color}
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
                this.changePage('home');
              }}
              onMouseOver={this.onMouseOverCloseBtn}
              onMouseOut={this.onMouseOutCloseBtn}
            />
          }
          <Nav
            changePage={this.changePage}
            expandCursor={this.expandCursor}
            setCursor={this.setCursor}
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
              setTooltipText={this.setTooltipText}
              isMobile={this.state.isMobile}
              changePage={this.changePage}
              animateJobList={this.state.animateJobList}
              hide={hideNav}
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
            <p>sclp is a collection of isaac eliape’s work on web development and ui engineering</p>
            <a
              href="mailto:hello@isaaceliape.com?subject=site contact"
              className="contact"
            >
              contact
            </a>
          </Page>
          <Page
            onMouseOverCloseBtn={this.onMouseOverCloseBtn}
            onMouseOutCloseBtn={this.onMouseOutCloseBtn}
            pageName="services"
            currentPage={currentPage}
            closePage={this.changePage}
          >
            <ul className="services-list">
              <li className="services-list-item">landing pages</li>
              <li className="services-list-item">web apps</li>
              <li className="services-list-item">hybrid apps</li>
              <li className="services-list-item">websites</li>
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
              <li className="awards-list-item">
                <a target="_blank">awwwards</a>
              </li>
              <li className="awards-list-item">
                <a target="_blank">cannes lions</a>
              </li>
              <li className="awards-list-item">
                <a target="_blank">css awards</a>
              </li>
              <li className="awards-list-item">
                <a target="_blank">fwa</a>
              </li>
            </ul>
          </Page>
        </Container>
      </div>
    );
  }
}

export default App;
