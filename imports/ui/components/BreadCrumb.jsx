import React, { Component, PropTypes } from 'react';

class BreadCrumb extends Component {

  render() {
    return(
      <ul className="arrow-breadcrumb">
      {
        this.props.list.map((item, index) => {
          return (
            <li key={index}>
              <a
              onClick={this.props.onChange.bind(this, index)}
              className={index <= this.props.selected ? "active" : ""}
              >
                {item}
              </a>
            </li>
          );
        })
      }
      </ul>
    );
  }
}

BreadCrumb.propTypes = {
  list: PropTypes.array,
  selected: PropTypes.number,
  onChange: PropTypes.func
}

export default BreadCrumb;
