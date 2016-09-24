import React, { PropTypes } from 'react';

function PointBox({ points, dataId }) {
  let classModifier;

  if (points < 0) {
    classModifier = 'point-box--danger';
  } else if (points < 5) {
    classModifier = 'point-box--warning';
  }

  return (
    <div data-id={dataId} className={`point-box ${classModifier}`}>
      <div>{points}</div>
    </div>);
}

PointBox.propTypes = {
  points: PropTypes.number,
  dataId: PropTypes.string,
};

PointBox.defaultProps = {
  points: 0,
  dataId: 'point-box',
};

export default PointBox;
