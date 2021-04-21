import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ManageTeamList from '../../components/ManageTeamList/ManageTeamList';
import './ManageTeam.css';

function ManageTeam(props) {
  // Response object I am expecting for a team
  const team = {
    id: 1,
    name: 'Team Name Pending',
    members: [
      {
        id: 1,
        name: 'Ryan Chase',
        email: 'ryan@chasery.com',
        owner: true,
      },
      {
        id: 2,
        name: 'Fernando Fishman IV',
        email: 'fernado@chasery.com',
        owner: false,
      },
      {
        id: 3,
        name: 'Sarah Connor',
        email: 'sarah@chasery.com',
        owner: false,
      },
    ],
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='ManageTeam'>
          <div className='ManageTeam__wrapper'>
            <div className='ManageTeam__header'>
              <h2>{team.name}</h2>
              <Link to={`/teams/${team.id}/edit-team`}>Edit Team</Link>
              <Link to='/teams'>Delete Team</Link>
            </div>
            <ManageTeamList members={team.members} />
          </div>
        </section>
      </main>
    </>
  );
}

export default ManageTeam;
