import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';
// ●
// ■
// ▲
class Nav extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      navItems: [
        {
          title: 'about',
          icon: '●',
        },
        {
          title: 'services',
          icon: '■',
        },
        {
          title: 'awards',
          icon: '▲',
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
          this.props.setCursor('+');
        }}
      >
        <ul className="nav-wrapper">
          {this.state.navItems.map(({ title, icon }) => (
            <li
              className="nav-item"
              key={`key-${title}`}
              onClick={() => {
                this.props.changePage(title, true);
              }}
              onMouseOver={() => {
                this.props.setCursor(icon);
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
  setCursor: PropTypes.func,
};
Nav.defaultProps = {
  hide: true,
};
export default Nav;