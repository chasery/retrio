import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SignInForm from '../../components/SignInForm/SignInForm';
import './SignIn.css';

function SignIn(props) {
  const location = useLocation();
  const history = useHistory();

  const handleSignInSuccess = () => {
    const destination = (location.state || {}).from || '/racks';

    history.push(destination);
  };

  return (
    <>
      <Header />
      <main role='main'>
        <section className='SignIn'>
          <div className='SignIn__wrapper'>
            <SignInForm onSignInSuccess={handleSignInSuccess} />
          </div>
        </section>
      </main>
    </>
  );
}

export default SignIn;
