import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import BoardsItemThumb from '../BoardsItemThumb/BoardsItemThumb';
import './BoardsItem.css';

function BoardsItem(props) {
  const { id, name, owner } = props;
  const [visible, setVisible] = useState(false);
  const createdAt = new Date(props.createdAt);
  const updatedAt = new Date(props.updatedAt);

  const handleMenuToggle = () => {
    setVisible(!visible);
  };

  const handleDeleteBoard = () => {
    console.log('Delete this!');
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
            <span onClick={handleMenuToggle}>⋮</span>
            <Menu visible={visible}>
              <li>
                <Link to={`/boards/${id}/edit-board`}>Edit Board</Link>
              </li>
              <li>
                <button className='Link' onClick={handleDeleteBoard}>
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
    </li>
  );
}

export default BoardsItem;
