import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import BoardsList from '../../components/BoardsList/BoardsList';
import './Boards.css';

function Boards(props) {
  // Response object I am expecting for boards
  const boards = [
    {
      id: 1,
      name: 'Deploy Happy Retrio Board',
      created_at: new Date(),
      modified_at: new Date(),
    },
    {
      id: 2,
      name: 'Someone Else Broke It Retrio Board',
      created_at: new Date(),
      modified_at: null,
    },
    {
      id: 3,
      name: 'Team Name Pending Retrio Board',
      created_at: new Date(),
      modified_at: new Date(),
    },
  ];

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
            <BoardsList boards={boards} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Boards;
