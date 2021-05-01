import React from 'react';
import './Error.css';

function Error(props) {
  const { inline, message } = props;
  return <p className={`Error ${inline ? 'inline' : ''}`}>{message}</p>;
}

export default Error;
