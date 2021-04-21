import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import TeamsList from '../../components/TeamsList/TeamsList';
import './Teams.css';

function Teams(props) {
  // Response object I am expecting for teams
  const teams = [
    {
      id: 1,
      name: 'Deploy Happy',
      owner: false,
    },
    {
      id: 2,
      name: 'Someone Else Broke It',
      owner: true,
    },
    {
      id: 3,
      name: 'Team Name Pending',
      owner: true,
    },
  ];

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
            <TeamsList teams={teams} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Teams;
