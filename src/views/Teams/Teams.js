import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RetrioContext from '../../context/retrio-context';
import Header from '../../components/Header/Header';
import TeamsList from '../../components/TeamsList/TeamsList';
import './Teams.css';

function Teams(props) {
  const context = useContext(RetrioContext);

  return (
    <>
      <Header />
      <main role='main'>
        <section className='Teams'>
          <div className='Teams__wrapper'>
            <div className='Teams__header'>
              <h2>My Teams</h2>
              <Link to='/teams/add-team'>Add Team</Link>
            </div>
            <TeamsList teams={context.teams} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Teams;
