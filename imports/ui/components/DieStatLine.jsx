import React, { Component, PropTypes } from 'react';

class DieStatLine extends Component {

  onChange(statLevel) {
    const newLevel = this.isCurrentlySelected(statLevel) ? 1 : statLevel;
    this.props.onChange(this.props.field, newLevel);
  }

  getClass(statLevel) {
    if (statLevel < this.props.value) {
      return 'die-stat-line__btn--before-active';
    } else if (statLevel === this.props.value) {
      return 'die-stat-line__btn--active';
    }

    return 'die-stat-line__btn--after-active';
  }

  convertToDie(statLevel) {
    return 2 + (2 * statLevel);
  }

  isCurrentlySelected(statLevel) {
    return statLevel === this.props.value;
  }

  render() {
    return (
      <div>
        <div className="die-stat-line">
          <div className="form-group row">
            <div className="col-sm-2 col-form-label">{this.props.label}</div>
            <div className="btn-group col-sm-10" role="group">
                {
                  ([1, 2, 3, 4, 5].map(statLevel =>
                    (<button
                      htmlFor="button"
                      key={`${this.props.label}-${statLevel}`}
                      className={`col-sm-2 btn ${this.getClass(statLevel)}`}
                      onClick={() => { this.onChange(statLevel); }}
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

DieStatLine.propTypes = {
  label: PropTypes.string,
  field: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default DieStatLine;
