import React from 'react';
import Header from '../../components/Header/Header';
import './Boards.css';

function Boards(props) {
  return (
    <>
      <Header />
      <main role='main'>
        <section className='Hero'>
          <div className='Hero__wrapper'>
            <h2>Boards</h2>
          </div>
        </section>
      </main>
    </>
  );
}

export default Boards;
