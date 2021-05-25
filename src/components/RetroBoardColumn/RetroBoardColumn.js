import React from 'react';
import { Link, useParams } from 'react-router-dom';
import RetroBoardCard from '../RetroBoardCard/RetroBoardCard';
import './RetroBoardColumn.css';

function RetroBoardColumn(props) {
  const { boardId } = useParams();
  const { boardOwner, title, category, cards, deleteCard } = props;

  const cardCategory = () => {
    if (category === '1') return 'good';
    if (category === '2') return 'bad';
    if (category === '3') return 'toTry';
    if (category === '4') return 'shoutOut';
    return null;
  };

  const renderCards = (cards) => {
    if (cards) {
      return cards.map((card) => (
        <RetroBoardCard
          key={card.card_id}
          id={card.card_id}
          boardOwner={boardOwner}
          category={category}
          headline={card.headline}
          text={card.text}
          user={card.user}
          deleteCard={deleteCard}
        />
      ));
    }
  };

  return (
    <li className={`RetroBoardColumn ${cardCategory()}`}>
      <h3 className='RetroBoardColumn__title'>
        <span>{title}</span>
        <Link
          className='RetroBoardColumn__button primary'
          to={`/boards/${boardId}/cards/add`}
        >
          Add Card
        </Link>
      </h3>
      <ol>{renderCards(cards)}</ol>
    </li>
  );
}

export default RetroBoardColumn;
