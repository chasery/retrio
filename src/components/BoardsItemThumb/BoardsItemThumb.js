import React from 'react';
import './BoardsItemThumb.css';

function BoardsItemThumb(props) {
  const createCards = () => {
    const random = Math.floor(Math.random() * 5);
    const cards = [];

    for (let i = 0; i < 4; i++) {
      if (i < random) {
        cards.push(
          <div key={i} className='BoardsItemThumb__card filled'></div>
        );
      } else {
        cards.push(<div key={i} className='BoardsItemThumb__card empty'></div>);
      }
    }

    return cards;
  };

  return (
    <div className='BoardsItemThumb'>
      <div className='BoardsItemThumb__column'>{createCards()}</div>
      <div className='BoardsItemThumb__column'>{createCards()}</div>
      <div className='BoardsItemThumb__column'>{createCards()}</div>
      <div className='BoardsItemThumb__column'>{createCards()}</div>
    </div>
  );
}

export default BoardsItemThumb;
