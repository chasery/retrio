import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BoardsApiService from '../../services/boards-api-service';
import Header from '../../components/Header/Header';
import Error from '../../components/Error/Error';
import BoardsList from '../../components/BoardsList/BoardsList';
import './Boards.css';

function Boards(props) {
  const [boards, setBoards] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function initState() {
      try {
        let apiCall = await BoardsApiService.getBoards();
        let res = await apiCall;
        console.log(res);
        setBoards(res);
      } catch (error) {
        setError(error.error);
      }
    }

    initState();
  }, []);

  return (
    <>
      <Header />
      <main role='main'>
        <section className='Boards'>
          <div className='Boards__wrapper'>
            <div className='Boards__header'>
              <h2>My Boards</h2>
              <Link to='/boards/add-board'>Add Board</Link>
            </div>
            {error ? <Error message={error} /> : <BoardsList boards={boards} />}
          </div>
        </section>
      </main>
    </>
  );
}

export default Boards;
