import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RetrioContext from '../../context/retrio-context';
import Menu from '../Menu/Menu';
import './RetroBoardCard.css';

function RetroBoardCard(props) {
  const { id, headline, text, created_by } = props;
  const context = useContext(RetrioContext);
  const { boardId } = useParams();
  const [visible, setVisible] = useState(false);

  const board = context.boards.find((board) => board.id === boardId);

  const canModify = () => {
    if (created_by ? created_by.id : 1 === context.loggedInUser.id) {
      return true;
    } else if (board ? board.owner_id : 1 === context.loggedInUser.id) {
      return true;
    } else {
      return false;
    }
  };

  const handleMenuToggle = () => {
    setVisible(!visible);
  };

  const handleDeleteCard = () => {
    context.deleteCard(boardId, id);
  };

  return (
    <li className='RetroBoardCard'>
      <div className='RetroBoardCard__headline'>
        <h4>{headline}</h4>
        {/*
          only show control if board owner id matches the logged in user
          or

        */}
        {canModify() && (
          <div className='RetroBoardCard__control'>
            <span onClick={handleMenuToggle}>⋮</span>
            <Menu visible={visible}>
              <li>
                <Link to={`/boards/${boardId}/card/${id}`}>Edit Card</Link>
              </li>
              <li>
                <button className='Link' onClick={handleDeleteCard}>
                  Delete Card
                </button>
              </li>
            </Menu>
          </div>
        )}
      </div>
      <div className='RetroBoardCard__text'>
        <pre>{text}</pre>
      </div>
      <div className='RetroBoardCard__creator'>
        Submitted by{' '}
        <strong>{created_by ? created_by.name : 'Anonymous'}</strong>
      </div>
    </li>
  );
}

export default RetroBoardCard;
