import React from 'react';
import './BoardThumbnail.css';

function BoardThumbnail(props) {
  const createCards = () => {
    const random = Math.floor(Math.random() * 5);
    let cards = [];

    for (let i = 0; i < 4; i++) {
      console.log(i, '<', random);
      if (i < random) {
        cards.push(<div className='BoardThumbnail__card filled'></div>);
      } else {
        cards.push(<div className='BoardThumbnail__card empty'></div>);
      }
    }

    return cards;
  };

  return (
    <div className='BoardThumbnail'>
      <div className='BoardThumbnail__column'>{createCards()}</div>
      <div className='BoardThumbnail__column'>{createCards()}</div>
      <div className='BoardThumbnail__column'>{createCards()}</div>
      <div className='BoardThumbnail__column'>{createCards()}</div>
    </div>
  );
}

export default BoardThumbnail;
