import React, { Component, PropTypes } from 'react';

class DieStatLine extends Component {

  isCurrentlySelected(statLevel){
    return statLevel === this.props.value;
  }

  onClick(statLevel){
    let newLevel = this.isCurrentlySelected(statLevel) ? 0 : statLevel;
    this.props.action(this.props.field, newLevel);
  }

  isActive(statLevel){
    return statLevel <= this.props.value;
  }

  convertToDie(statLevel){
    return 2 + 2*statLevel;
  }

  render() {
    return (
      <div>
        <div className="container">
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">{this.props.label}</label>
              <div className="btn-group col-sm-10" role="group">
                {
                  ([1, 2, 3, 4, 5].map(statLevel =>
                    (<button
                        htmlFor="button"
                        className={'col-sm-2 btn' + (this.isActive(statLevel) ? ' stat-button-active' : '')}
                        onClick={this.onClick.bind(this, statLevel)}
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
  action: PropTypes.func
}

export default DieStatLine;
