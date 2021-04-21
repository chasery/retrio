import React from 'react';
import { Link } from 'react-router-dom';
import BoardThumbnail from '../BoardThumbnail/BoardThumbnail';
import './Board.css';

function Board(props) {
  const { id, name, created_at, modified_at } = props;

  return (
    <li className='Board'>
      <Link to={`/boards/${id}`}>
        <h3 className='Board__name'>{name}</h3>
        <BoardThumbnail />
        {modified_at ? (
          <p className='Board__date'>
            Last modified {modified_at.toLocaleDateString()}
          </p>
        ) : (
          <p className='Board__date'>
            Created {created_at.toLocaleDateString()}
          </p>
        )}
      </Link>
    </li>
  );
}

export default Board;
