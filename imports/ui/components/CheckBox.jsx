import React, { Component, PropTypes } from 'react';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = props.onChange.bind(this, props.id);
  }

  render() {
    return (
      <div
        className={`form-check list-group-item check-box ${this.props.parentClass}`}
        key={this.props.id}
      >
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={this.onChange}
            checked={this.props.value}
          />
          <div className="check-box__text">
            {this.props.label}
          </div>
        </label>
      </div>
    );
  }
}

CheckBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  parentClass: PropTypes.string,
};

export default CheckBox;
