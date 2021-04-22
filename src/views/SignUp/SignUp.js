import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './SignUp.css';

function SignUp(props) {
  const location = useLocation();
  const history = useHistory();

  const handleSignUpSuccess = () => {
    const destination = (location.state || {}).from || '/racks';

    history.push(destination);
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='SignUp'>
          <div className='SignUp__wrapper'>
            <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
          </div>
        </section>
      </main>
    </>
  );
}

export default SignUp;
