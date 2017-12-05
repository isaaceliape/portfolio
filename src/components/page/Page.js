import React from 'react';
import PropTypes from 'prop-types';
import Button from './../button/Button';
import './Page.css';

class Page extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pageName: this.props.pageName,
    };
  }
  render() {
    const { pageName, closePage } = this.props;
    const hasCloseButton = typeof closePage === "function";
    return (
      this.props.currentPage === this.state.pageName &&
      <section className={`Page ${pageName}`}>
        {this.props.children}
        {hasCloseButton &&
          <Button
            text="close"
            className="close"
            onClick={() => {
              closePage("home");
            }}
          />
        }
      </section>
    );
  }
}
Page.propTypes = {
  pageName: PropTypes.string,
  currentPage: PropTypes.string,
  closePage: PropTypes.func,
};

export default Page;
