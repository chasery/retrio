import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import FormField from '../FormField/FormField';
import Error from '../Error/Error';

function SignUpForm(props) {
  // Controlled form state
  const [email, setEmail] = useState({ value: '', error: null });
  const [password, setPassword] = useState({ value: '', error: null });
  const [passwordConfirm, setPasswordConfirm] = useState({
    value: '',
    error: null,
  });
  const [fName, setFName] = useState({ value: '', error: null });
  const [lName, setLName] = useState({ value: '', error: null });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
  };

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
          onChange={(e) => setEmail({ ...email, value: e.target.value })}
          value={email.value}
        />
        <FormField
          id='password'
          label='Password'
          type='password'
          isRequired={true}
          onChange={(e) => setPassword({ ...password, value: e.target.value })}
          value={password.value}
        />
        <FormField
          id='passwordConfirm'
          label='Password (Confirm)'
          type='password'
          isRequired={true}
          onChange={(e) =>
            setPasswordConfirm({ ...passwordConfirm, value: e.target.value })
          }
          value={passwordConfirm.value}
        />
        <FormField
          id='fName'
          label='First Name'
          type='text'
          isRequired={false}
          onChange={(e) => setFName({ ...fName, value: e.target.value })}
          value={fName.value}
        />
        <FormField
          id='lName'
          label='Last Name'
          type='text'
          isRequired={false}
          onChange={(e) => setLName({ ...lName, value: e.target.value })}
          value={lName.value}
        />
        {error ? <Error message={error} /> : null}
        <div className='Form__controls'>
          <button className='Form__button primary' type='submit'>
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
