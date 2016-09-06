import React, { Component, PropTypes } from 'react';

import DieStatLine from '../components/DieStatLine.jsx';

class StatList extends Component {
  constructor(props) {
    super(props);
    this.onChange = props.onChange ? props.onChange.bind(this) : null;
  }

  render() {
    return (
      <div>
        <h3>{this.props.label}</h3>
        <div>
          {
            (Object.keys(this.props.items).map(item =>
              <DieStatLine
                label={item.toUpperCase()}
                field={item}
                value={this.props.items[item]}
                action={this.onChange}
                key={item}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

StatList.propTypes = {
  items: PropTypes.object,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

export default StatList;
