import React from 'react';
import { Link, useParams } from 'react-router-dom';
import RetroBoardCard from '../RetroBoardCard/RetroBoardCard';
import './RetroBoardColumn.css';

function RetroBoardColumn(props) {
  const { boardId } = useParams();
  const { boardOwner, title, cards } = props;

  const renderCards = (cards) => {
    if (cards) {
      return cards.map((card) => (
        <RetroBoardCard
          key={card.id}
          id={card.card_id}
          boardOwner={boardOwner}
          headline={card.headline}
          text={card.text}
          user={card.user}
        />
      ));
    }
  };

  return (
    <li className='RetroBoardColumn'>
      <h3 className='RetroBoardColumn__title'>
        <span>{title}</span>
        <Link to={`/boards/${boardId}/add-card`}>Add Card</Link>
      </h3>
      <ol>{renderCards(cards)}</ol>
    </li>
  );
}

export default RetroBoardColumn;
