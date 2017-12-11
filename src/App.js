import _ from 'lodash';
import React, { Component } from 'react';
import Button from './components/button/Button';
import Container from './components/container/Container';
import Page from './components/page/Page';
import Nav from './components/nav/Nav';
import Letter from './components/letter/Letter';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Teste',
      currentPage: 'home',
      hideNav: true,
      whiteBg: false,
      tooltipText: '',
      isMobile: false,
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
      ]
    }
    this.changePage = this.changePage.bind(this);
    this.onHoverJob = this.onHoverJob.bind(this);
    this.onClickMenu = this.onClickMenu.bind(this);
    this.clearTooltip = this.clearTooltip.bind(this);
    this.isHovering = this.isHovering.bind(this);
    this.splitLetters = this.splitLetters.bind(this);
  }
  componentDidMount(){
    const isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/) !== null;
    this.setState({
      isMobile,
    });
  }
  splitLetters(text){ 
    const letters = ['a','e','i','o','u'];
    const textReplace = text.split('').map((a, i) => {
      const random = Math.ceil((Math.random() * (3000 - 500)) + 500);
      const key = `${i}${a}`;
      if(_.indexOf(letters, a.toLowerCase()) !== -1){
        return <Letter key={key} text={a} delay={random} />;
      }
      return <span key={key}>{a}</span>;
    });
    return textReplace;
  }
  changePage(targetPage){
    const whiteBg = targetPage !== 'home';
    this.setState({
      currentPage: targetPage,
      hideNav: true,
      whiteBg,
    });
  }
  onClickMenu(){
    this.setState({
      hideNav: false,
    });
  }
  onHoverJob(tooltipText, title){
    if(this.state.isMobile){
      return false;
    }
    let jobsList = Object.assign(this.state.jobsList);
    jobsList = jobsList.map(item => {
      item.active = false;
      return item;
    });
    const itemIndex = _.findIndex(jobsList, ['title', title]);
    jobsList[itemIndex].active = true;
    
    this.setState({
      tooltipText,
      jobsList,
    });
  }
  clearTooltip(){
    if(this.state.isMobile){
      return false;
    }
    let jobsList = Object.assign(this.state.jobsList);
    jobsList = jobsList.map(item => {
      item.active = false;
      return item;
    });
    this.setState({
      tooltipText: '',
      jobsList,
    });
  }
  isHovering(){
    return this.state.jobsList.filter(item => item.active === true).length > 0;
  }
  render() {
    const {
      tooltipText,
      hideNav,
      currentPage,
      whiteBg,
      jobsList
    } = this.state;
    const whiteBgClass = whiteBg ? 'white' : '';
    const hideMenuButton = tooltipText.length > 0 || !hideNav || currentPage !== "home";
    return (
      <div className={`App ${whiteBgClass}`}>
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
            />
          }
          <Nav
            changePage={this.changePage}
            hide={hideNav}
          />
          <Page
            pageName="home"
            currentPage={currentPage}
          >
          {hideNav &&
            <div className="jobs">
              {jobsList.map(({ title, link, tooltip, active }) => {
                const hide = this.isHovering() && !active ? '0' : 1;
                return (
                  <a
                    style={{opacity: hide}}
                    key={`key-${title}`}
                    href={link}
                    target="_blank"
                    className="job-link"
                    onMouseOver={() => {
                      this.onHoverJob(tooltip, title);
                    }}
                    onMouseOut={this.clearTooltip}
                    onClick={(e) => {
                      if(title === 'sclp'){
                        e.preventDefault();
                        this.changePage('about');
                      }
                    }}
                  >
                    {this.splitLetters(title)}
                  </a>
                );
              })}
            </div>
          }
            <span className="tooltip">{tooltipText}</span>
          </Page>
          <Page
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
