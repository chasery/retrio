import React from 'react';
import Header from '../../components/Header/Header';
import './Landing.css';

function Landing(props) {
  return (
    <>
      <Header />
      <main role='main'>
        <section className='Hero'>
          <div className='Hero__wrapper'>
            <h2>Hello, world!</h2>
          </div>
        </section>
        <section className='AppInfo'>
          <div className='AppInfo__wrapper'></div>
        </section>
      </main>
    </>
  );
}

export default Landing;
