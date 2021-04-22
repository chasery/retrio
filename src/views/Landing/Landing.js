import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Landing.css';

function Landing(props) {
  return (
    <>
      <Header />
      <main role='main'>
        <section className='Hero'>
          <div className='Hero__wrapper'>
            <h2>
              A digital collaboration tool for your
              <br />
              <span>Sprint Retrospective</span>
            </h2>
          </div>
        </section>
        <section className='AppInfo'>
          <div className='AppInfo__wrapper'>
            <div>
              <img src='https://via.placeholder.com/320x106' />
              <h3>Hold your retro digitally</h3>
              <p>
                With Agile teams making an in-office to work-from-home shift,
                Retrio makes this transition easier by creating an online
                communial space to collaborate on what went well, what didn't go
                well, things to try, and shout outs, during your sprint.
              </p>
            </div>
            <div>
              <img src='https://via.placeholder.com/320x106' />
              <h3>Create a retro in seconds</h3>
              <p>
                Having a hard time booking one of the four meeting rooms in your
                office building? Packing in the box of post-it notes and pens is
                no longer required with Retrio. You can create a digital
                retrospective board and share it out to your team in seconds!
              </p>
            </div>
            <div>
              <img src='https://via.placeholder.com/320x106' />
              <h3>Manage your teams</h3>
              <p>
                Managing multiple teams' retros just got easier with our team
                management tool. Create a team, add your team members, and
                quickly begin collaborating.
              </p>
            </div>
          </div>
        </section>
        <section className='AppDemo'>
          <div className='AppDemo__wrapper'>
            <h3>Want to give it a spin?</h3>
            <p>
              You can use our demo account to check out our app.{' '}
              <a href='/boards'>Sign In with Demo Account</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Landing;
