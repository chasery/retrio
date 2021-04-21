import React from 'react';
import { Link } from 'react-router-dom';
import './ManageTeamItem.css';

function ManageTeamItem(props) {
  const { id, name, email, owner } = props;

  return (
    <li className='ManageTeamItem'>
      <div className='ManageTeamItem__info'>
        <h3 className='ManageTeamItem__name'>{name}</h3>
        <div className='ManageTeamItem__email'>{email}</div>
        <div className='ManageTeamItem__role'>
          {owner ? 'Owner' : 'Contributor'}
        </div>
      </div>

      {!owner ? (
        <div className='ManageTeamItem__controls'>
          <Link to={`/teams/${id}`}>Remove</Link>
        </div>
      ) : null}
    </li>
  );
}

export default ManageTeamItem;
