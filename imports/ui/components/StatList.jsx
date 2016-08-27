import React, { Component, PropTypes } from 'react';

import DieStatLine from '../components/DieStatLine.jsx';

class StatList extends Component {
  constructor(props){
    super(props);
    this.onChange = props.onChange ? props.onChange.bind(this) : null;
  }

  render() {
    return (
      <div>
        <h3>{this.props.label}</h3>
        <div>
          {
            (Object.keys(this.props.data).map(attribute =>
              <DieStatLine
                label={attribute.toUpperCase()}
                field={attribute}
                value={this.props.data[attribute]}
                action={this.onChange}
                key={attribute}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

StatList.propTypes = {
  data: PropTypes.object,
  label: PropTypes.string,
  onChange: PropTypes.func
}

export default StatList;
