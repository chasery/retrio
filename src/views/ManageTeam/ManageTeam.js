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

  const handleDeleteTeamMember = (userId) => {
    const updatedMembers = team.members.filter(
      (member) => member.user_id !== userId
    );

    setTeam({
      ...team,
      members: updatedMembers,
    });
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
                <ul>
                  <li className='AddMember'>
                    <Link
                      className='ManageTeam__button primary'
                      to={`/teams/${teamId}/members/add`}
                    >
                      Add Member
                    </Link>
                  </li>
                  <li>
                    <Link
                      className='ManageTeam__button secondary'
                      to={`/teams/${teamId}/edit`}
                    >
                      Edit Team
                    </Link>
                  </li>
                  <li>
                    <button
                      className='ManageTeam__button warning'
                      onClick={handleDeleteTeam}
                    >
                      Delete Team
                    </button>
                  </li>
                </ul>
              )}
            </div>
            {error ? (
              <Error message={error} />
            ) : (
              <ManageTeamList
                members={team ? team.members : []}
                canModify={canModify}
                deleteTeamMember={handleDeleteTeamMember}
              />
            )}
            {!error && canModify && (
              <Link
                className='ManageTeam__button primary footer'
                to={`/teams/${teamId}/members/add`}
              >
                Add Member
              </Link>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default ManageTeam;
