import React from 'react';
import { Link } from 'react-router-dom';
import BoardsItemThumb from '../BoardsItemThumb/BoardsItemThumb';
import './BoardsItem.css';

function BoardsItem(props) {
  const { id, name, created_at, modified_at } = props;

  return (
    <li className='BoardsItem'>
      <Link to={`/boards/${id}`} title={name}>
        <div className='BoardsItem__name'>
          <h3>{name}</h3>
        </div>
        {modified_at ? (
          <p className='BoardsItem__date'>
            Last modified {modified_at.toLocaleDateString()}
          </p>
        ) : (
          <p className='BoardsItem__date'>
            Created {created_at ? created_at.toLocaleDateString() : null}
          </p>
        )}
        <BoardsItemThumb />
      </Link>
    </li>
  );
}

export default BoardsItem;
