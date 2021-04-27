import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RetrioContext from '../../context/retrio-context';
import Header from '../../components/Header/Header';
import RetroBoardColumn from '../../components/RetroBoardColumn/RetroBoardColumn';
import './RetroBoard.css';

function RetroBoard(props) {
  const context = useContext(RetrioContext);
  const { boardId } = useParams();
  const retroBoard = context.boards.find((board) => board.id === boardId);

  const renderColumns = () => {
    const columns = [];

    for (const [key, value] of Object.entries(context.cardCategories)) {
      columns.push(
        <RetroBoardColumn
          key={key}
          category={key}
          title={value}
          cards={retroBoard.cards.filter(
            (card) => card.category === parseInt(key)
          )}
        />
      );
    }

    return columns;
  };

  return (
    <>
      <Header fullWidth={true} />
      <main role='main'>
        <section className='RetroBoard'>
          <ul className='RetroBoard__board'>{renderColumns()}</ul>
        </section>
      </main>
    </>
  );
}

export default RetroBoard;
