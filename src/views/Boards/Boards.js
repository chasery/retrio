import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RetrioContext from '../../context/retrio-context';
import Header from '../../components/Header/Header';
import BoardsList from '../../components/BoardsList/BoardsList';
import './Boards.css';

function Boards(props) {
  const context = useContext(RetrioContext);

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
            <BoardsList boards={context.boards} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Boards;
