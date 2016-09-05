import React, { PropTypes } from 'react';

function PointBox({ points, dataId }) {
  return (<div data-id={dataId}>{points}</div>);
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
