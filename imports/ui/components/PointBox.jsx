import React, { PropTypes } from 'react';

function PointBox({ points, dataId }) {
  let boxClassName = 'box';
  if (points < 0) {
    boxClassName += ' danger';
  } else if (points < 5) {
    boxClassName += ' warning';
  }

  return (
    <div data-id={dataId} className="point-box">
      <div className={boxClassName}>{points}</div>
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
