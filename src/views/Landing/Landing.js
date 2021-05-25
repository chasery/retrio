import React from 'react';
import { useHistory } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Landing.css';
import collaboration from '../../assets/images/collaboration.jpg';
import digital from '../../assets/images/digital.jpg';
import team from '../../assets/images/team.jpg';

function Landing(props) {
  const history = useHistory();

  const handleDemoSignIn = () => {
    AuthApiService.postLogin({
      email: process.env.REACT_APP_DEMO_ACCOUNT,
      password: process.env.REACT_APP_DEMO_PASSWORD,
    })
      .then((res) => {
        history.push('/boards');
      })
      .catch((res) => {});
  };

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
              <div className='AppInfo__image'>
                <img src={collaboration} alt='Alt text' />
              </div>
              <h3>Hold your retro digitally</h3>
              <p>
                With Agile teams making an in-office to work-from-home shift,
                Retrio makes this transition easier by creating an online
                communial space to collaborate on what went well, what didn't go
                well, things to try, and shout outs, during your sprint.
              </p>
            </div>
            <div>
              <div className='AppInfo__image'>
                <img src={digital} alt='Alt text' />
              </div>
              <h3>Create a retro in seconds</h3>
              <p>
                Having a hard time booking one of the four meeting rooms in your
                office building? Packing in the box of post-it notes and pens is
                no longer required with Retrio. You can create a digital
                retrospective board and share it out to your team in seconds!
              </p>
            </div>
            <div>
              <div className='AppInfo__image'>
                <img src={team} alt='Alt text' />
              </div>
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
              <button
                className='AppDemo__button primary'
                onClick={() => handleDemoSignIn()}
              >
                Sign In with Demo Account
              </button>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Landing;
