import React, { Component, PropTypes } from 'react';

class CheckListCard extends Component {
  constructor(props){
    super(props);
  }

  renderItems(){
    return this.props.items.map(item =>
      <div className="form-check list-group-item" key={item._id}>
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" value="" />
            {item.name}
        </label>
      </div>
    );
  }

  renderList(){
    return (
      <div className="list-group">
        <h4 className="list-group-item check-list-title">{this.props.title}</h4>
        {this.renderItems()}
      </div>
    );
  }

  render(){
    return(
      <div className="check-list-card">
        {this.renderList()}
      </div>
    );
  }
}

CheckListCard.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  toggleAction: PropTypes.func
}

export default CheckListCard;
