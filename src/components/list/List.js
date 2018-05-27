import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Button from './../button/Button';
import Marquee from './../link/Marquee';

import './List.css';

class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: 1,
      gyroscope: 0,
      percent: 0,
      animate: this.props.animateJobList,
      listItens: [
        {
          title: 'sclp',
          tooltip: 'about',
          active: false,
          image: '',
          imagePath: '',
          hideImage: true,
          description: '',
          technologies: [],
          link: '',
        },
        {
          title: 'hpmagicwords',
          tooltip: 'speech api',
          active: false,
          image: require('./../../assets/images/projects/hp_magic_works.png'),
          imagePath: './../../assets/images/projects/hp_magic_works.png',
          hideImage: true,
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
          image: require('./../../assets/images/projects/getty_endless_possibilities.png'),
          imagePath: './../../assets/images/projects/getty_endless_possibilities.png',
          hideImage: true,
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
          image: require('./../../assets/images/projects/flplny.png'),
          imagePath: './../../assets/images/projects/flplny.png',
          hideImage: true,
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
          image: require('./../../assets/images/projects/fundacao_lemann.png'),
          imagePath: './../../assets/images/projects/fundacao_lemann.png',
          hideImage: true,
          description: 'cms and responsive website',
          technologies: [
            'html5/css3',
            'javascript',
            'wordpress',
          ],
          link: 'http://www.fundacaolemann.org.br/',
        },
      ],
      projectIsOpened: false,
      projectPageBackgroundColor: '#fff',
    };
    this.timeToShow = 2000;
    this.jobsActionOut = this.jobsActionOut.bind(this);
    this.activeAllWorks = this.activeAllWorks.bind(this);
    this.jobLinkActionIn = this.jobLinkActionIn.bind(this);
    this.hitareaOutAction = this.hitareaOutAction.bind(this);
    this.jobLinkActionOut = this.jobLinkActionOut.bind(this);
    this.setProjectBgColor = this.setProjectBgColor.bind(this);
    this.gyroscopeSelection = this.gyroscopeSelection.bind(this);
    this.jobLinkActionClick = this.jobLinkActionClick.bind(this);
    this.onClickCloseProject = this.onClickCloseProject.bind(this);
    this.onMouseLeaveContent = this.onMouseLeaveContent.bind(this);
    this.onMouseEnterContent = this.onMouseEnterContent.bind(this);
  }
  componentDidMount() {
    const { isMobile } = this.props.getMainState();
    if (isMobile) {
      this.activeAllWorks();
      setTimeout(() => {
        window.addEventListener('deviceorientation', this.gyroscopeSelection.bind(this));
      }, 1000);
    }
    const timeOfLastAnimationDelay = (((this.state.listItens.length + 1) * 200) + 1500) + 200;
    this.stopAnim(timeOfLastAnimationDelay);
  }
  componentWillUpdate() {
    const { isMobile } = this.props.getMainState();
    if (isMobile) {
      clearTimeout(window.timer);
      window.timer = setTimeout(this.activeAllWorks, this.timeToShow);
    }
  }
  onHoverJob(tooltipText, title) {
    const mainState = this.props.getMainState();
    if (this.props.isMobile) {
      return false;
    }
    let listItens = Object.assign(this.state.listItens);
    listItens = listItens.map((x) => {
      const newX = Object.assign(x);
      newX.active = false;
      newX.hideImage = true;
      return newX;
    });
    const itemIndex = _.findIndex(listItens, ['title', title]);
    listItens[itemIndex].active = true;
    listItens[itemIndex].hideImage = false;

    this.setState({
      listItens,
      currentPos: itemIndex,
    });

    mainState.tooltipText = tooltipText;
    mainState.cursor.color = '#fff';
    this.props.setMainState(mainState);
    return false;
  }
  onMouseEnterContent() {
    const state = this.props.getMainState();
    if (state.cursor.color !== '#000') {
      state.cursor.color = '#000';
      this.props.setMainState(state);
    }
  }
  onMouseLeaveContent() {
    const state = this.props.getMainState();
    if (state.cursor.color !== '#fff') {
      state.cursor.color = '#fff';
      this.props.setMainState(state);
    }
  }
  onClickCloseProject() {
    const state = Object.assign({}, this.state);
    state.projectIsOpened = false;

    const listItens = this.state.listItens.slice(0);
    for (let i = 0; i < listItens.length; i++) {
      listItens[i].active = false;
    }
    state.listItens = listItens;

    this.setState(state);

    const mainState = this.props.getMainState();
    mainState.cursor.color = '#000';
    mainState.cursor.rotate = false;
    mainState.blackFont = true;
    mainState.backgroundColor = '#fff';
    mainState.hideJobList = false;
    mainState.tooltipText = '';
    mainState.currentPage = 'home';
    this.props.setMainState(mainState);
  }
  setProjectBgColor(color) {
    const state = Object.assign({}, this.state);
    state.projectPageBackgroundColor = color;
    this.setState(state);
  }
  gyroscopeSelection(e) {
    const state = Object.assign({}, this.state);
    const mainState = this.props.getMainState();
    const { currentPage, hideNav } = mainState;
    if (state.projectIsOpened || currentPage !== 'home' || !hideNav) {
      // console.log('gyroscopeSelection FALSE');
      return false;
    }
    let percent = 0;
    if (this.props.orientation === 'portrait') {
      // const beta = Number(e.beta) - 40;
      const beta = Number(e.beta) - 20;
      percent = ((beta * 100) / 30).toFixed(0);
      percent = percent <= 0 ? 0 : percent;
      percent = percent >= 100 ? 100 : percent;
    } else {
      const gamma = Number(e.gamma) + 25;
      percent = ((gamma * 100) / 30).toFixed(0);
      percent = percent >= 0 ? 0 : percent;
      percent = percent <= -100 ? -100 : percent;
      percent = Math.abs(percent);
    }
    const fraction = 100 / state.listItens.length;

    let pos = 0;
    state.listItens.forEach((value, i) => {
      const start = fraction * i;
      const end = fraction * (i + 1);
      if (percent >= start && percent <= end) {
        pos = i;
      }
    });
    pos = pos === 0 ? 1 : pos;
    state.percent = percent;
    state.gyroscope = e;
    state.listItens = state.listItens.map((x) => {
      const newX = Object.assign(x);
      newX.active = false;
      newX.hideImage = true;
      return newX;
    });
    state.listItens[pos].active = true;
    state.listItens[pos].hideImage = false;

    if (pos !== this.state.currentPos) {
      state.currentPos = pos;
      this.setState(state);

      mainState.backgroundColor = '#000';
      mainState.blackFont = false;
      mainState.tooltipText = state.listItens[pos].tooltip;
      this.props.setMainState(mainState);
    }
    return false;
  }
  activeAllWorks() {
    const mainState = this.props.getMainState();
    const { hideNav, currentPage } = mainState;
    // console.table({ hideNav, currentPage});
    if (!hideNav || currentPage !== 'home') {
      // console.log('activeAllWorks false');
      return false;
    }
    // console.log('activeAllWorks true');
    const state = Object.assign({}, this.state);
    const listItens = state.listItens.map(x => ({
      ...x,
      active: true,
      hideImage: true,
    }));

    for (let i = 0; i < listItens.length; i += i) {
      listItens[i].active = true;
    }
    state.listItens = listItens;
    // state.currentPos = 0;
    this.setState(state);

    mainState.backgroundColor = '#fff';
    mainState.blackFont = true;
    mainState.tooltipText = '';
    this.props.setMainState(mainState);
    return false;
  }
  isHovering() {
    return this.state.listItens.filter(item => item.active === true).length > 0;
  }
  stopAnim(time) {
    setTimeout(() => {
      this.setState({
        animate: false,
      });
    }, time);
  }
  hitareaOutAction() {
    const mainState = this.props.getMainState();
    mainState.backgroundColor = '#fff';
    mainState.blackFont = true;
    mainState.bgAnimation = true;
    this.props.setMainState(mainState);
  }
  jobsActionOut() {
    this.props.setMainState({
      backgroundColor: '#fff',
      blackFont: true,
      bgAnimation: true,
    });
  }
  jobLinkActionClick(e) {
    const listItens = this.state.listItens.slice(0);
    if (this.props.isMobile) {
      const links = Array.prototype.slice.call(document.querySelectorAll('.job-link'));
      const pos = _.findIndex(links, e.target);
      const { link } = listItens[pos];
      window.open(link);
      return false;
    }
    listItens[this.state.currentPos].active = true;

    this.setState({
      listItens,
      projectIsOpened: true,
    });

    const mainState = this.props.getMainState();
    mainState.backgroundColor = '#000';
    mainState.hideJobList = true;
    mainState.tooltipText = ' ';
    this.props.setMainState(mainState);

    return false;
  }
  jobLinkActionIn(tooltip, title) {
    if (!this.state.animate) {
      this.onHoverJob(tooltip, title);
      this.props.setMainState({
        backgroundColor: '#000',
        blackFont: false,
        bgAnimation: true,
      });
    }
  }
  jobLinkActionOut() {
    const mainState = this.props.getMainState();
    if (this.props.isMobile) {
      return false;
    }
    let listItens = Object.assign(this.state.listItens);
    listItens = listItens.map((item) => {
      const newItem = Object.assign(item);
      newItem.active = false;
      return newItem;
    });
    this.setState({
      listItens,
    });
    mainState.tooltipText = '';
    mainState.cursor.color = '#000';
    this.props.setMainState(mainState);
    return false;
  }
  render() {
    const currentPage = this.state.listItens.filter(x => x.active)[0];
    const openedClass = this.state.projectIsOpened ? 'opened' : '';
    return (
      <div className="List">
        <div className={`projectPage ${openedClass}`}>
          <div className="wrapProjectImages">
            {this.state.listItens.map(({ image, imagePath, hideImage }, i) => (
              <p
                key={`key_${imagePath}`}
                className="projectPageImage"
                style={{
                  backgroundImage: image !== '' ? `url(${image})` : 'none',
                  visibility: i === this.state.currentPos && this.isHovering() && !hideImage ? 'visible' : 'hidden',
                }}
              />
              ))}
          </div>
          {currentPage instanceof Object &&
            <div
              className="content"
              onMouseLeave={this.onMouseLeaveContent}
              onMouseEnter={this.onMouseEnterContent}
              style={{
                backgroundColor: this.state.projectPageBackgroundColor,
              }}
            >
              <h2 className="description">{currentPage.description}</h2>
              <ul className="technologies">
                {currentPage.technologies.map(text => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
              <Marquee
                props={this.props}
                setMainState={this.props.setMainState}
                getMainState={this.props.getMainState}
                setProjectBgColor={this.setProjectBgColor}
                currentPage={this.props.currentPage}
                speed={2}
              >
                <a
                  className="link"
                  target="_blank"
                  href={currentPage.link}
                >
                  launch website
                </a>
              </Marquee>
              <Button
                text="close"
                className="closeProject"
                onClick={this.onClickCloseProject}
                onMouseOver={() => {
                  const state = this.props.getMainState();
                  state.cursor.rotate = true;
                  this.props.setMainState(state);
                }}
                onFocus={() => {
                  const state = this.props.getMainState();
                  state.cursor.rotate = true;
                  this.props.setMainState(state);
                }}
                onMouseOut={() => {
                  const state = this.props.getMainState();
                  state.cursor.rotate = false;
                  this.props.setMainState(state);
                }}
                onBlur={() => {
                  const state = this.props.getMainState();
                  state.cursor.rotate = false;
                  this.props.setMainState(state);
                }}
              />
            </div>
          }
        </div>
        <div
          className="jobs"
          onMouseOut={this.jobsActionOut}
          onBlur={this.jobsActionOut}
        >
          {!this.props.hideJobList &&
            this.state.listItens.map(({
                title,
                tooltip,
                active,
              }, i) => {
              let hide = this.isHovering() && !active ? '0' : 1;
              if (this.props.isMobile) {
                hide = (active === true) ? '1' : '0';
                if (title !== 'sclp') {
                  return (
                    <button
                      className="job-link"
                      key={`key-${title}`}
                      onClick={this.jobLinkActionClick}
                      style={{
                        opacity: hide,
                        pointerEvents: (hide === '0' ? 'none' : 'initial'),
                      }}
                    >
                      <span>{title}</span>
                    </button>
                  );
                }
                return (
                  <span
                    className="job-link"
                    key={`key-${title}`}
                    style={{
                      pointerEvents: 'none',
                    }}
                  >
                    {title}
                  </span>
                  );
              }
              if (title !== 'sclp') {
                return (
                  <button
                    className="job-link"
                    key={`key-${title}`}
                    style={{
                      opacity: hide,
                      color: this.isHovering() ? '#fff' : '#000',
                      pointerEvents: (hide === '0' ? 'none' : 'initial'),
                    }}
                    onClick={this.jobLinkActionClick}
                    onMouseOver={() => {
                      this.jobLinkActionIn(tooltip, title);
                    }}
                    onFocus={() => {
                      this.jobLinkActionIn(tooltip, title);
                    }}
                    onMouseOut={() => {
                      this.jobLinkActionOut();
                    }}
                    onBlur={() => {
                      this.jobLinkActionOut();
                    }}
                  >
                    <div className="job-marquee">
                      <span
                        className="text"
                        style={{
                          animationDelay: `${i / 2}s`,
                        }}
                      >
                        {title}
                      </span>
                    </div>
                    <span className="marquee-hover">{title}</span>
                  </button>
                );
              }
              return (
                <button
                  className="logo"
                  key={`key-${title}`}
                  style={{
                    opacity: hide,
                  }}
                >
                  {title}
                </button>
              );
            })
          }
          <div
            className="hitarea"
            onMouseOver={this.hitareaOutAction}
            onFocus={this.hitareaOutAction}
          />
        </div>
      </div>
    );
  }
}
List.propTypes = {
  setMainState: PropTypes.func,
  getMainState: PropTypes.func,
  isMobile: PropTypes.bool,
  hideJobList: PropTypes.bool,
  orientation: PropTypes.string,
  animateJobList: PropTypes.bool,
  currentPage: PropTypes.string,
};
List.defaultProps = {
  hideJobList: false,
  setMainState: null,
  getMainState: null,
  isMobile: null,
  orientation: null,
  animateJobList: null,
  currentPage: null,
};
export default List;
