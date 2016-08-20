import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class extends Component {
  constructor(props){
    super(props);
  }


  setDieType(buttonsEnabled){
    buttonsEnabled = buttonsEnabled === this.props.value ? 0 : buttonsEnabled;
    this.props.action(this.props.field, buttonsEnabled);
  }

  getButtonClass(index){
    let className = 'col-sm-2 btn ';
    if (this.props.value >= index){
      className += ' stat-button-active';
    }
    return className;
  }

  render() {
    return (
      <div>
        <div className="container">
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">{this.props.label}</label>
              <div className="btn-group col-sm-10" role="group">
                <button htmlFor="button"
                  onClick={this.setDieType.bind(this, 1)}
                  className={this.getButtonClass(1)}
                  >4
                </button>
                <button htmlFor="button"
                  onClick={this.setDieType.bind(this, 2)}
                  className={this.getButtonClass(2)}
                  >6
                </button>
                <button htmlFor="button"
                  onClick={this.setDieType.bind(this, 3)}
                  className={this.getButtonClass(3)}
                  >8
                </button>
                <button htmlFor="button"
                  onClick={this.setDieType.bind(this, 4)}
                  className={this.getButtonClass(4)}
                  >10
                </button>
                <button htmlFor="button"
                  onClick={this.setDieType.bind(this, 5)}
                  className={this.getButtonClass(5)}
                  >12
                </button>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
