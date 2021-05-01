import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import Form from '../Form/Form';
import FormField from '../FormField/FormField';
import Error from '../Error/Error';

function SignInForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    AuthApiService.postLogin({
      email: email,
      password: password,
    })
      .then((res) => {
        setEmail('');
        setPassword('');
        props.onSignInSuccess();
      })
      .catch((res) => {
        setError(res.error);
      });
  };

  return (
    <Form id='SignIn' onSubmit={(e) => handleSubmit(e)}>
      <div className='Form__header'>
        <h2>Sign In</h2>
      </div>
      <div className='Form__body'>
        <p>Enter your account credentials below to sign in.</p>
        <FormField
          id='email'
          label='Email'
          type='email'
          isRequired={true}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormField
          id='password'
          label='Password'
          type='password'
          isRequired={true}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {error ? <Error message={error} /> : null}
        <div className='Form__controls'>
          <button
            className='Form__button primary'
            type='submit'
            disabled={!email || !password}
          >
            Sign In
          </button>
        </div>
      </div>
      <p className='Form__footer'>
        Don't have an account? Sign up for a Retrio account{' '}
        <Link to='/sign-up'>here</Link>.
      </p>
    </Form>
  );
}

export default SignInForm;
