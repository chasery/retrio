import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamsApiService from '../../services/teams-api-service';
import TokenService from '../../services/token-service';
import Error from '../../components/Error/Error';
import './ManageTeamItem.css';

function ManageTeamItem(props) {
  const {
    userId,
    email,
    firstName,
    lastName,
    owner,
    canModify,
    deleteTeamMember,
  } = props;
  const { teamId } = useParams();
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    function initState() {
      const jwt = TokenService.readJwtToken();

      if (jwt.id === userId) setCurrentUser(true);
    }

    initState();
  }, [userId]);

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
    TeamsApiService.deleteTeamMember(teamId, userId)
      .then((res) => deleteTeamMember(userId))
      .catch((error) => setError(error.error));
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
          <button
            className='ManageTeamItem__button warning'
            onClick={handleRemoveTeamMember}
          >
            Remove
          </button>
        </div>
      )}
      {canLeave() && (
        <div className='ManageTeamItem__controls'>
          <button
            className='ManageTeamItem__button warning'
            onClick={handleRemoveTeamMember}
          >
            Leave
          </button>
        </div>
      )}
      {error ? <Error message={error} /> : null}
    </li>
  );
}

export default ManageTeamItem;
