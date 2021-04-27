import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import RetrioContext from '../../context/retrio-context';
import './ManageTeamItem.css';

function ManageTeamItem(props) {
  const { id, name, email } = props;
  const context = useContext(RetrioContext);
  const { teamId } = useParams();
  const history = useHistory();

  const team = context.teams.find((team) => team.id === teamId);

  const canRemove = () => {
    if (
      team
        ? team.owner_id
        : 1 === context.loggedInUser.id && id !== context.loggedInUser.id
    ) {
      return true;
    } else {
      return false;
    }
  };

  const canLeave = () => {
    if (
      team
        ? team.owner_id
        : 1 !== context.loggedInUser.id && context.loggedInUser.id === id
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleRemoveTeamMember = () => {
    context.removeTeamMember(teamId, id);
  };

  const handleLeaveTeam = () => {
    // Will remove relationship of user to team in further development.
    // For prototype purposes, we'll just remove the team to mimic
    // the behavior of not seeing the team any longer.
    context.deleteTeam(teamId);
    history.push(`/teams`);
  };

  return (
    <li className='ManageTeamItem'>
      <div className='ManageTeamItem__info'>
        <h3 className='ManageTeamItem__name'>{name}</h3>
        <div className='ManageTeamItem__email'>{email}</div>
        <div className='ManageTeamItem__role'>
          {team ? team.owner_id : 1 === id ? 'Owner' : 'Contributor'}
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
