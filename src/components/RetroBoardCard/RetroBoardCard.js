import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TokenService from '../../services/token-service';
import Menu from '../Menu/Menu';
import './RetroBoardCard.css';

function RetroBoardCard(props) {
  const { id, boardOwner, headline, text, user } = props;
  const { boardId } = useParams();
  const [visible, setVisible] = useState(false);

  const canModify = () => {
    if (TokenService.hasAuthToken()) {
      let userId = TokenService.readJwtToken().id;

      if (user.id === userId) {
        return true;
      } else if (boardOwner) {
        return true;
      } else {
        return false;
      }
    }
  };

  const handleMenuToggle = () => {
    setVisible(!visible);
  };

  const handleDeleteCard = () => {
    console.log('I want to delete this!');
  };

  const createUserName = (user) => {
    const name = [];

    if (user) {
      if (user.first_name) name.push(user.first_name);

      if (user.last_name) name.push(user.last_name);

      if (!name.length) name.push(user.email);

      return name.join(' ');
    }
  };

  return (
    <li className='RetroBoardCard'>
      <div className='RetroBoardCard__headline'>
        <h4>{headline}</h4>
        {canModify() && (
          <div className='RetroBoardCard__control'>
            <span onClick={handleMenuToggle}>⋮</span>
            <Menu visible={visible}>
              <li>
                <Link to={`/boards/${boardId}/cards/${id}/edit`}>
                  Edit Card
                </Link>
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
        Submitted by <strong>{createUserName(user)}</strong>
      </div>
    </li>
  );
}

export default RetroBoardCard;
