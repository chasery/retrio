import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import RetrioContext from '../../context/retrio-context';
import Menu from '../Menu/Menu';
import BoardsItemThumb from '../BoardsItemThumb/BoardsItemThumb';
import './BoardsItem.css';

function BoardsItem(props) {
  const { id, name, owner_id, created_at, modified_at } = props;
  const context = useContext(RetrioContext);
  const [visible, setVisible] = useState(false);

  const canModify = () => {
    if (owner_id === context.loggedInUser.id) {
      return true;
    } else {
      return false;
    }
  };

  const handleMenuToggle = () => {
    setVisible(!visible);
  };

  const handleDeleteBoard = () => {
    context.deleteCard(id);
  };

  return (
    <li className='BoardsItem'>
      <div className='BoardsItem__header' title={name}>
        <Link className='BoardsItem__headerInfo' to={`/boards/${id}`}>
          <h3 className='BoardsItem__name'>{name}</h3>
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
        {canModify() && (
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
