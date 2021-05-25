import React from 'react';
import { Link } from 'react-router-dom';
import './TeamsItem.css';

function TeamsItem(props) {
  const { id, name, owner } = props;

  return (
    <li className='TeamsItem'>
      <div className='TeamsItem__info'>
        <h3 className='TeamsItem__name'>{name}</h3>
        <div className='TeamsItem__role'>{owner ? 'Owner' : 'Contributor'}</div>
      </div>
      <ul className='TeamsItem__controls'>
        <li>
          <Link className='TeamsItem__button primary' to={`/teams/${id}`}>
            Manage
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default TeamsItem;
