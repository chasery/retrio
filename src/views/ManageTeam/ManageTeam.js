import React, { useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import RetrioContext from '../../context/retrio-context';
import Header from '../../components/Header/Header';
import ManageTeamList from '../../components/ManageTeamList/ManageTeamList';
import './ManageTeam.css';

function ManageTeam(props) {
  const { teamId } = useParams();
  const history = useHistory();
  const context = useContext(RetrioContext);

  const team = context.teams.find((team) => team.id === teamId);

  const canModify = () => {
    if (team ? team.owner_id : 1 === context.loggedInUser.id) {
      return true;
    } else {
      return false;
    }
  };

  const handleDeleteTeam = () => {
    context.deleteTeam(teamId);
    history.push(`/teams`);
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='ManageTeam'>
          <div className='ManageTeam__wrapper'>
            <div className='ManageTeam__header'>
              <h2>{team ? team.name : 'Manage Team'}</h2>
              {canModify() && (
                <>
                  <Link to={`/teams/${teamId}/edit-team`}>Edit Team</Link>
                  <button className='Link' onClick={handleDeleteTeam}>
                    Delete Team
                  </button>
                </>
              )}
            </div>
            <ManageTeamList members={team ? team.members : []} />
            <Link
              className='ManageTeam__addTeamMember'
              to={`/teams/${teamId}/add-team-member`}
            >
              Add Team Member
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default ManageTeam;
