import React, { Component, PropTypes } from 'react';

class CheckBox extends Component {
  constructor(props){
    super(props);
    this.onChange = props.onChange.bind(this, props.id);
  }

  render(){
    return(
      <div className="form-check list-group-item" key={this.props.id}>
        <label className="form-check-label">
          <input
            className="form-check-input"
            type="checkbox"
            onClick={this.onChange}
            checked={this.props.initialValue}
          />
            {this.props.label}
        </label>
      </div>
    );
  }
}

CheckBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  initialValue: PropTypes.bool,
  onChange: PropTypes.func,
}

export default CheckBox;
