import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import TeamsApiService from '../../services/teams-api-service';
import TokenService from '../../services/token-service';
import Header from '../../components/Header/Header';
import ManageTeamList from '../../components/ManageTeamList/ManageTeamList';
import Error from '../../components/Error/Error';
import './ManageTeam.css';

function ManageTeam(props) {
  const history = useHistory();
  const { teamId } = useParams();
  const [team, setTeam] = useState([]);
  const [canModify, setCanModify] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initState() {
      try {
        let apiCall = await TeamsApiService.getTeam(teamId);
        let res = await apiCall;

        setTeam(res);

        const jwt = TokenService.readJwtToken();
        const user = res.members.find((member) => member.user_id === jwt.id);

        if (user.owner) setCanModify(true);
      } catch (error) {
        setError(error.error);
      }
    }

    initState();
  }, [teamId]);

  const handleDeleteTeam = () => {
    TeamsApiService.deleteTeam(teamId)
      .then((res) => history.push(`/teams`))
      .catch((error) => setError(error.error));
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='ManageTeam'>
          <div className='ManageTeam__wrapper'>
            <div className='ManageTeam__header'>
              <h2>{team ? team.name : 'Manage Team'}</h2>
              {canModify && (
                <>
                  <Link to={`/teams/${teamId}/edit-team`}>Edit Team</Link>
                  <button className='Link' onClick={handleDeleteTeam}>
                    Delete Team
                  </button>
                </>
              )}
            </div>
            {error ? (
              <Error message={error} />
            ) : (
              <>
                <ManageTeamList
                  members={team ? team.members : []}
                  canModify={canModify}
                />
                <Link
                  className='ManageTeam__addTeamMember'
                  to={`/teams/${teamId}/add-team-member`}
                >
                  Add Team Member
                </Link>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default ManageTeam;
