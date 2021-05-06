import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RetrioContext from '../../context/retrio-context';
import BoardsApiService from '../../services/boards-api-service';
import Header from '../../components/Header/Header';
import RetroBoardColumn from '../../components/RetroBoardColumn/RetroBoardColumn';
import Error from '../../components/Error/Error';
import './RetroBoard.css';

function RetroBoard(props) {
  const context = useContext(RetrioContext);
  const { boardId } = useParams();
  const [board, setBoard] = useState({ cards: [] });
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initState() {
      try {
        let apiCall = await BoardsApiService.getBoard(boardId);
        let res = await apiCall;
        setBoard(res);
      } catch (error) {
        setError(error.error);
      }
    }

    initState();
  }, [boardId]);

  const renderColumns = (cards) => {
    const columns = [];

    for (const [key, value] of Object.entries(context.cardCategories)) {
      columns.push(
        <RetroBoardColumn
          key={key}
          boardOwner={board.owner}
          category={key}
          title={value}
          cards={
            cards.length !== 0
              ? cards.filter((card) => card.category === parseFloat(key))
              : []
          }
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
          {error ? (
            <Error message={error} />
          ) : (
            <ul className='RetroBoard__board'>{renderColumns(board.cards)}</ul>
          )}
        </section>
      </main>
    </>
  );
}

export default RetroBoard;
