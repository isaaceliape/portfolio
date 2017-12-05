import React from 'react';
import PropTypes from 'prop-types';
import './Nav.css';

class Nav extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      navItems: [
        'about',
        'services',
        'awards'
      ]
    }
    this.gotoPage = this.gotoPage.bind(this);
  }
  gotoPage(target) {
    this.props.changePage(target);
  }
  render() {
    return(
      !this.props.hide &&
      <div className="Nav">
        <ul className="nav-wrapper">
          {this.state.navItems.map((title) => (
            <li
              className="nav-item"
              key={`key-${title}`}
              onClick={() => {
                this.gotoPage(title);
              }}
            >
              {title}
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
};
Nav.defaultProps = {
  hide: true,
};
export default Nav;