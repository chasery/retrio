import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BoardsApiService from '../../services/boards-api-service';
import Header from '../../components/Header/Header';
import BoardsList from '../../components/BoardsList/BoardsList';
import Error from '../../components/Error/Error';
import './Boards.css';

function Boards(props) {
  const [boards, setBoards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initState() {
      try {
        let apiCall = await BoardsApiService.getBoards();
        let res = await apiCall;

        setBoards(res);
      } catch (error) {
        setError(error.error);
      }
    }

    initState();
  }, []);

  const handleDeleteBoard = (boardId) => {
    const updatedBoards = boards.filter((board) => board.id !== boardId);

    setBoards(updatedBoards);
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='Boards'>
          <div className='Boards__wrapper'>
            <div className='Boards__header'>
              <h2>My Boards</h2>
              <Link className='Boards__button primary' to='/boards/add'>
                Add Board
              </Link>
            </div>
            {error ? (
              <Error message={error} />
            ) : (
              <BoardsList boards={boards} deleteBoard={handleDeleteBoard} />
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Boards;
