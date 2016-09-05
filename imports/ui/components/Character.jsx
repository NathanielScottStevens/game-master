import React, { PropTypes } from 'react';
import { Link } from 'react-router';

function Character({ character }) {
  return (
    <div>
      <Link to={`characters/${character._id}`} >
        {character.firstName} {character.lastName}
      </Link>
    </div>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired,
};

export default Character;
