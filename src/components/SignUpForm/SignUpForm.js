import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UsersApiService from '../../services/users-api-service';
import Form from '../Form/Form';
import FormField from '../FormField/FormField';
import Error from '../Error/Error';

function SignUpForm(props) {
  const history = useHistory();

  // Controlled form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    UsersApiService.postUser({
      email: email,
      password: password,
      first_name: firstName,
      last_name: lastName,
    })
      .then((res) => {
        history.push(`/sign-in`);
      })
      .catch((error) => {
        setError(error.error);
      });
  };

  useEffect(() => {
    const handlePasswordValidation = () => {
      if (password === '' || passwordConfirm === '') {
        return;
      } else if (password === passwordConfirm) {
        setPasswordMismatch('');
      } else {
        setPasswordMismatch('Passwords do not match.');
      }
    };

    handlePasswordValidation();
  });

  return (
    <Form id='Register' onSubmit={(e) => handleSubmit(e)}>
      <div className='Form__header'>
        <h2>Sign up today!</h2>
      </div>
      <div className='Form__body'>
        <p>Creating an account is easy, just fill out the fields below.</p>
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
        <FormField
          id='passwordConfirm'
          label='Password (Confirm)'
          type='password'
          isRequired={true}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm.calue}
        />
        {passwordMismatch ? (
          <Error inline={true} message={passwordMismatch} />
        ) : null}
        <FormField
          id='firstName'
          label='First Name'
          type='text'
          isRequired={false}
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <FormField
          id='lastName'
          label='Last Name'
          type='text'
          isRequired={false}
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        {error ? <Error message={error} /> : null}
        <div className='Form__controls'>
          <button
            className='Form__button primary'
            type='submit'
            disabled={!email || !password || passwordMismatch}
          >
            Sign Up
          </button>
        </div>
      </div>
      <p className='Form__footer'>
        Already have an account? Sign in to your Retrio account{' '}
        <Link to='/sign-in'>here</Link>.
      </p>
    </Form>
  );
}

export default SignUpForm;
