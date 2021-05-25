import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BoardsApiService from '../../services/boards-api-service';
import Error from '../Error/Error';
import Menu from '../Menu/Menu';
import BoardsItemThumb from '../BoardsItemThumb/BoardsItemThumb';
import './BoardsItem.css';

function BoardsItem(props) {
  const { id, name, owner, deleteBoard } = props;
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(null);
  const createdAt = new Date(props.createdAt);
  const updatedAt = new Date(props.updatedAt);

  const handleMenuToggle = () => {
    setVisible(!visible);
  };

  const handleBlur = () => {
    setTimeout(() => setVisible(false), 250);
  };

  const handleDeleteBoard = () => {
    BoardsApiService.deleteBoard(id)
      .then(deleteBoard(id))
      .catch((error) => setError(error.error));
  };

  return (
    <li className='BoardsItem'>
      <div className='BoardsItem__header' title={name}>
        <Link className='BoardsItem__headerInfo' to={`/boards/${id}`}>
          <h3 className='BoardsItem__name'>{name}</h3>
          {updatedAt.getTime() > createdAt.getTime() ? (
            <p className='BoardsItem__date'>
              Last modified {updatedAt ? updatedAt.toLocaleDateString() : null}
            </p>
          ) : (
            <p className='BoardsItem__date'>
              Created {createdAt ? createdAt.toLocaleDateString() : null}
            </p>
          )}
        </Link>
        {owner && (
          <div className='BoardsItem__headerControl'>
            <button onClick={handleMenuToggle} onBlur={handleBlur}>
              ⋮
            </button>
            <Menu visible={visible}>
              <li>
                <Link to={`/boards/${id}/edit`}>Edit Board</Link>
              </li>
              <li>
                <button className='warning' onClick={handleDeleteBoard}>
                  Delete Board
                </button>
              </li>
            </Menu>
          </div>
        )}
      </div>
      <Link to={`/boards/${id}`}>
        <BoardsItemThumb />
      </Link>
      {error ? <Error message={error} /> : null}
    </li>
  );
}

export default BoardsItem;
