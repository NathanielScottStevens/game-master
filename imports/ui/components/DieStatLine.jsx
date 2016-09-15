import React, { Component, PropTypes } from 'react';

class DieStatLine extends Component {

  onChange(statLevel) {
    const newLevel = this.isCurrentlySelected(statLevel) ? 0 : statLevel;
    this.props.onChange(this.props.field, newLevel);
  }

  isCurrentlySelected(statLevel) {
    return statLevel === this.props.value;
  }

  isActive(statLevel) {
    return statLevel <= this.props.value;
  }

  convertToDie(statLevel) {
    return 2 + (2 * statLevel);
  }

  render() {
    return (
      <div>
        <div className="die-stat-line">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">{this.props.label}</label>
            <div className="btn-group col-sm-10" role="group">
                {
                  ([1, 2, 3, 4, 5].map(statLevel =>
                    (<button
                      htmlFor="button"
                      className={`col-sm-2 btn
                        ${this.isCurrentlySelected(statLevel)
                          ? ' active'
                          : ''}`}
                      onClick={this.onChange.bind(this, statLevel)}
                    >
                      {this.convertToDie(statLevel)}
                    </button>)
                  ))
                }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DieStatLine.PropTypes = {
  label: PropTypes.string,
  field: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default DieStatLine;
