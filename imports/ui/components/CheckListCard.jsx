import React, { Component, PropTypes } from 'react';

import CheckBox from './CheckBox.jsx';

class CheckListCard extends Component {
  constructor(props) {
    super(props);

    this.onChange = props.onChange.bind(this);
  }

  renderItems() {
    return this.props.items.map(item =>
      <CheckBox
        key={item.id}
        id={item.id}
        label={item.label}
        value={item.value}
        parentClass="check-list-card__check-box"
        onChange={this.onChange}
      />
    );
  }

  render() {
    return (
      <div className="check-list-card">
        <div className="list-group">
          <h4 className="list-group-item check-list-card__title">
            {this.props.label}
          </h4>
          {this.renderItems()}
        </div>
      </div>
    );
  }
}

CheckListCard.propTypes = {
  label: PropTypes.string,
  items: PropTypes.array,
  onChange: PropTypes.func,
};

export default CheckListCard;
