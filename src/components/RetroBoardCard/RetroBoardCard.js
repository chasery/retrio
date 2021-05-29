import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CardsApiService from '../../services/cards-api-service';
import TokenService from '../../services/token-service';
import Menu from '../Menu/Menu';
import Error from '../../components/Error/Error';
import './RetroBoardCard.css';

function RetroBoardCard(props) {
  const { id, boardOwner, category, headline, text, user, deleteCard } = props;
  const { boardId } = useParams();
  const [visible, setVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    function initState() {
      const jwt = TokenService.readJwtToken();

      if (jwt.id === user.user_id) setCurrentUser(true);
    }

    initState();
  }, [user]);

  const canDelete = () => {
    if (TokenService.hasAuthToken()) {
      if (currentUser) {
        return true;
      } else if (boardOwner) {
        return true;
      } else {
        return false;
      }
    }
  };

  const canEdit = () => {
    if (TokenService.hasAuthToken()) {
      if (currentUser) {
        return true;
      } else {
        return false;
      }
    }
  };

  const handleMenuToggle = () => {
    setVisible(!visible);
  };

  const handleBlur = () => {
    setTimeout(() => setVisible(false), 250);
  };

  const handleDeleteCard = () => {
    CardsApiService.deleteCard(id)
      .then((res) => deleteCard(id))
      .catch((error) => setError(error.error));
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

  const cardCategory = () => {
    if (category === '1') return 'good';
    if (category === '2') return 'bad';
    if (category === '3') return 'toTry';
    if (category === '4') return 'shoutOut';
    return null;
  };

  const renderMenu = () => {
    return (
      <div className='RetroBoardCard__control'>
        <button onClick={handleMenuToggle} onBlur={handleBlur}>
          ⋮
        </button>
        <Menu visible={visible}>
          {canEdit() && (
            <li className='RetroBoardCard__controlEdit'>
              <Link to={`/boards/${boardId}/cards/${id}/edit`}>Edit Card</Link>
            </li>
          )}
          {canDelete() && (
            <li className='RetroBoardCard__controlDelete'>
              <button className='warning' onClick={handleDeleteCard}>
                Delete Card
              </button>
            </li>
          )}
        </Menu>
      </div>
    );
  };

  return (
    <li
      className={`RetroBoardCard ${cardCategory()} ${
        !headline ? 'noHeadline' : null
      }`}
    >
      {headline && (
        <div className='RetroBoardCard__headline'>
          <h4>{headline}</h4>
          {canDelete() && renderMenu()}
        </div>
      )}
      {error ? <Error message={error} /> : null}
      <div
        className={`RetroBoardCard__text ${!headline ? '--no-headline' : null}`}
      >
        <pre>{text}</pre>
        {!headline && canDelete() && renderMenu()}
      </div>
      <div className='RetroBoardCard__creator'>
        Submitted by <strong>{createUserName(user)}</strong>
      </div>
    </li>
  );
}

export default RetroBoardCard;
