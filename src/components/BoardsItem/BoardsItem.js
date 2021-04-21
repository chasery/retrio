import React from 'react';
import { Link } from 'react-router-dom';
import BoardsItemThumb from '../BoardsItemThumb/BoardsItemThumb';
import './BoardsItem.css';

function BoardsItem(props) {
  const { id, name, created_at, modified_at } = props;

  return (
    <li className='BoardsItem'>
      <Link to={`/boards/${id}`}>
        <div className='BoardsItem__name'>
          <h3>{name}</h3>
        </div>
        <BoardsItemThumb />
        {modified_at ? (
          <p className='BoardsItem__date'>
            Last modified {modified_at.toLocaleDateString()}
          </p>
        ) : (
          <p className='BoardsItem__date'>
            Created {created_at ? created_at.toLocaleDateString() : null}
          </p>
        )}
      </Link>
    </li>
  );
}

export default BoardsItem;
