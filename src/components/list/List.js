import _ from 'lodash';
import React from 'react';
import PropTypes, { func } from 'prop-types';
import './List.css';

class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: 1,
      gyroscope: 0,
      percent: 0,
      animate: this.props.animateJobList,
      listItens: this.props.listItens,
    };
    this.onHoverJob = this.onHoverJob.bind(this);
    this.clearTooltip = this.clearTooltip.bind(this);
    this.gyroscopeSelection = this.gyroscopeSelection.bind(this);
  }
  componentDidMount(){
    if(this.props.isMobile){
      window.addEventListener('deviceorientation', this.gyroscopeSelection);
    }
    const timeOfLastAnimationDelay = (((this.state.listItens.length + 1) * 200) + 1500) + 200;
    this.stopAnim(timeOfLastAnimationDelay);
  }
  gyroscopeSelection(e){
    let percent = 0;
    if (this.props.orientation === 'portrait'){
      const beta = Number(e.beta) - 40;
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
    const fraction = 100 / this.state.listItens.length;

    let pos = 0;
    this.state.listItens.forEach((value, i) => {
      const start = fraction * i;
      const end = fraction * (i + 1);
      if(percent >= start && percent <= end){
        pos = i;
      }
    });
    pos = pos === 0 ? 1 : pos;
    const stateCopy = Object.assign({}, this.state);
    stateCopy.percent = percent;
    stateCopy.gyroscope = e;
    stateCopy.listItens.forEach((x) => {
      x.active = false;
    });
    stateCopy.listItens[pos].active = true;
    if(pos !== this.state.currentPos){
      stateCopy.currentPos = pos;
      this.setState(stateCopy);
    } else {
      return false;
    }
  }
  onHoverJob(tooltipText, title){
    if(this.props.isMobile){
      return false;
    }
    let listItens = Object.assign(this.state.listItens);
    listItens = listItens.map(item => {
      item.active = false;
      return item;
    });
    const itemIndex = _.findIndex(listItens, ['title', title]);
    listItens[itemIndex].active = true;
    
    this.setState({
      listItens,
    });

    this.props.setTooltipText(tooltipText);
  }

  clearTooltip(){
    if(this.props.isMobile){
      return false;
    }
    let listItens = Object.assign(this.state.listItens);
    listItens = listItens.map(item => {
      item.active = false;
      return item;
    });
    this.setState({
      listItens,
    });

    this.props.setTooltipText('');
  }
  stopAnim(time){
    setTimeout(() => {
      this.setState({
        animate: false,
      });
    }, time);
  }
  isHovering(){
    return this.state.listItens.filter(item => item.active === true).length > 0;
  }
  render() {
    return(
      <div>
        <div
          className="jobs"
          onMouseOut={() => {
            this.props.setMainState({
              backgroundColor: "#fff",
              blackFont: true,
              bgAnimation: true,
            })
          }}
        >
          {this.props.hide &&
            this.state.listItens.map(({ title, link, tooltip, active }, i) => {
              const hide = this.isHovering() && !active ? '0' : 1;
              if(this.props.isMobile){
                if(title !== 'sclp'){
                  return(
                    <a
                      className="job-link"
                      key={`key-${title}`}
                      style={{
                        opacity: hide,
                        pointerEvents: (hide === '0'? 'none' : 'initial'),
                      }}
                      href={link}
                      target="_blank"
                    >
                      <span>{title}</span>
                    </a>
                  );
                }
                return(
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
              } else {
                if(title !== 'sclp'){
                  return (
                    <a
                      className="job-link"
                      key={`key-${title}`}
                      style={{
                        opacity: hide,
                        pointerEvents: (hide === '0'? 'none' : 'initial'),
                      }}
                      href={link}
                      target="_blank"
                      onMouseOver={() => {
                        if(!this.state.animate){
                          this.onHoverJob(tooltip, title);
                          this.props.setMainState({
                            backgroundColor: "#000",
                            blackFont: false,
                            bgAnimation: true,
                          });
                        }
                      }}
                      onMouseOut={() => {
                        this.clearTooltip()
                      }}
                    >
                      <marquee>{title}</marquee>
                      <span className="marquee-hover">{title}</span>
                    </a>
                  );
                }

                return (
                  <a
                    className="logo"
                    key={`key-${title}`}
                    style={{
                      opacity: hide,
                    }}
                    onClick={(e) => {
                      if(title === 'sclp'){
                        e.preventDefault();
                        this.props.changePage('about');
                      }
                    }}
                  >
                    {title}
                  </a>
                );
              }
            })
          }

          <div
            className="hitarea"
            onMouseOver={() => {
              this.props.setMainState({
                backgroundColor: "#fff",
                blackFont: true,
                bgAnimation: true,
              })
            }}
          />
        </div>
      </div>
    );
  }
}
List.propTypes = {
  listItens: PropTypes.arrayOf(PropTypes.object),
  setTooltipText: func,
  changePage: func,
  onHoverJob: func,
  setMainState: func,
  isMobile: PropTypes.bool,
  hide: PropTypes.bool,
  orientation: PropTypes.string,
  animateJobList: PropTypes.bool,
  setActiveItem: PropTypes.object,
}
export default List;