import React, { useEffect, useState } from 'react';
import TokenService from '../../services/token-service';
import './ManageTeamItem.css';

function ManageTeamItem(props) {
  const { userId, email, firstName, lastName, owner, canModify } = props;
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    function initState() {
      const jwt = TokenService.readJwtToken();

      if (jwt.id === userId) setCurrentUser(true);
    }

    initState();
  }, [userId]);

  // Leave
  //

  const canRemove = () => {
    if (canModify && !currentUser) return true;
  };

  const canLeave = () => {
    if (currentUser && !canModify) return true;
  };

  const createUserName = () => {
    const name = [];

    if (firstName) name.push(firstName);

    if (lastName) name.push(lastName);

    if (name.length) {
      return name.join(' ');
    }
  };

  const handleRemoveTeamMember = () => {
    console.log('Remove member');
  };

  const handleLeaveTeam = () => {
    console.log('Leave team');
  };

  return (
    <li className='ManageTeamItem'>
      <div className='ManageTeamItem__info'>
        {createUserName() ? (
          <>
            <h3 className='ManageTeamItem__name'>{createUserName()}</h3>
            <div className='ManageTeamItem__email'>{email}</div>
          </>
        ) : (
          <>
            <h3 className='ManageTeamItem__name'>{email}</h3>
          </>
        )}
        <div className='ManageTeamItem__role'>
          {owner ? 'Owner' : 'Contributor'}
        </div>
      </div>

      {canRemove() && (
        <div className='ManageTeamItem__controls'>
          <button className='Link' onClick={handleRemoveTeamMember}>
            Remove
          </button>
        </div>
      )}
      {canLeave() && (
        <div className='ManageTeamItem__controls'>
          <button className='Link' onClick={handleLeaveTeam}>
            Leave
          </button>
        </div>
      )}
    </li>
  );
}

export default ManageTeamItem;
