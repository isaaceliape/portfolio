import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

class Nav extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      navItems: [
        {
          title: 'about',
          icon: 'circle',
          ref: '',
        },
        {
          title: 'services',
          icon: 'rect',
          ref: '',
        },
        {
          title: 'awards',
          icon: 'triangle',
          ref: '',
        },
      ]
    }
  }
  render() {
    return(
      !this.props.hide &&
      <div
        className="Nav"
        onMouseOut={() => {
          this.props.navItemHover({
            x: -200,
            y: -200,
          });
        }}
      >
        <ul className="nav-wrapper">
          {this.state.navItems.map(({ title, icon }, i) => (
            <li
              className="nav-item"
              key={`key-${title}`}
              onClick={() => {
                this.props.changePage(title, true);
              }}
              ref={(ref) => { 
                this[icon] = ref;
              }}
              onMouseOver={() => {
                const elInfo = this[icon].children[0].getBoundingClientRect();
                const x = elInfo.x + (elInfo.width / 2);
                const y = elInfo.y + (elInfo.height / 2);
                this.props.navItemHover({
                  x,
                  y,
                  icon, 
                });
              }}
            >
              <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
Nav.propTypes = {
  hide: PropTypes.bool,
  changePage: PropTypes.func,
  navItemHover: PropTypes.func,
};
Nav.defaultProps = {
  hide: true,
};
export default Nav;