import React from 'react';
import TeamsItem from '../TeamsItem/TeamsItem';
import './TeamsList.css';

function TeamsList(props) {
  const { teams } = props;

  const renderTeams = (teams) => {
    if (teams) {
      return teams.map((team) => (
        <TeamsItem
          key={team.id}
          id={team.id}
          name={team.name}
          owner={team.owner}
        />
      ));
    }
  };

  return <ul className='TeamsList'>{renderTeams(teams)}</ul>;
}

export default TeamsList;
