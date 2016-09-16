import React, { Component, PropTypes } from 'react';

class BreadCrumb extends Component {

  renderItems() {
    return this.props.list.map((item, index) =>
      <li key={index} className={index === this.props.selected ? 'active' : ''}>
        <a onClick={index < this.props.selected ? this.props.onChange.bind(this, index) : ''}>
            {item}
        </a>
      </li>
    );
  }

  render() {
    return (
      <ul className="arrow-breadcrumb">
        {this.renderItems()}
      </ul>
    );
  }
}

BreadCrumb.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.number,
  onChange: PropTypes.func,
};

export default BreadCrumb;
