import _ from 'lodash';
import React from 'react';
import PropTypes, { func } from 'prop-types';
import { splitLetters } from './../../Helpers';
import './List.css';

class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      animate: this.props.animateJobList,
      listItens: this.props.listItens,
    };
    this.onHoverJob = this.onHoverJob.bind(this);
    this.clearTooltip = this.clearTooltip.bind(this);
  }
  componentDidMount(){
    const timeOfLastAnimationDelay = (((this.state.listItens.length + 1) * 200) + 1500) + 200;
    this.stopAnim(timeOfLastAnimationDelay);
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
      <div className="jobs">
        {this.props.hide &&
          this.state.listItens.map(({ title, link, tooltip, active }, i) => {
            const hide = this.isHovering() && !active ? '0' : 1;
            let delay = this.state.animate ? (i * 200) + 1500 : 0;
            if(title !== 'sclp'){
              return (
                <a
                  className="job-link"
                  key={`key-${title}`}
                  style={{opacity: hide}}
                  href={link}
                  target="_blank"
                  onMouseOver={() => {
                    if(!this.state.animate){
                      this.onHoverJob(tooltip, title);
                    }
                  }}
                  onMouseOut={this.clearTooltip}
                >
                  {splitLetters(title, delay, this.state.animate)}
                </a>
              );
            }
            return (
              <a
                className="job-link"
                key={`key-${title}`}
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
          })
        }
      </div>
    );
  }
}
List.propTypes = {
  listItens: PropTypes.arrayOf(PropTypes.object),
  setTooltipText: func,
  changePage: func,
  isMobile: PropTypes.bool,
  hide: PropTypes.bool,
  animateJobList: PropTypes.bool,
}
export default List;