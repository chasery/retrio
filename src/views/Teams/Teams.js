import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TeamsApiService from '../../services/teams-api-service';
import Header from '../../components/Header/Header';
import TeamsList from '../../components/TeamsList/TeamsList';
import Error from '../../components/Error/Error';
import './Teams.css';

function Teams(props) {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initState() {
      try {
        let apiCall = await TeamsApiService.getTeams();
        let res = await apiCall;

        setTeams(res);
      } catch (error) {
        setError(error.error);
      }
    }

    initState();
  }, []);

  return (
    <>
      <Header />
      <main role='main'>
        <section className='Teams'>
          <div className='Teams__wrapper'>
            <div className='Teams__header'>
              <h2>My Teams</h2>
              <Link to='/teams/add'>Add Team</Link>
            </div>
            {error ? <Error message={error} /> : <TeamsList teams={teams} />}
          </div>
        </section>
      </main>
    </>
  );
}

export default Teams;
