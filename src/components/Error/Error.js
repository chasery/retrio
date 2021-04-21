import React from 'react';
import './Error.css';

function Error(props) {
  const { message } = props;
  return <p className='Error'>{message}</p>;
}

export default Error;
