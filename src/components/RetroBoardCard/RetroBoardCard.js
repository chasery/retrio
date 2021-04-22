import React from 'react';
import './RetroBoardCard.css';

function RetroBoardCard(props) {
  const { headline, text, submitted_by } = props;

  return (
    <li className='RetroBoardCard'>
      <h4 class='RetroBoardCard__headline'>{headline}</h4>
      <div class='RetroBoardCard__text'>
        <p>{text}</p>
      </div>
      <div class='RetroBoardCard__creator'>
        Submitted by <strong>{submitted_by}</strong>
      </div>
    </li>
  );
}

export default RetroBoardCard;
