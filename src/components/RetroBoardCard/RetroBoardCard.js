import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './RetroBoardCard.css';

function RetroBoardCard(props) {
  const { headline, text, submitted_by } = props;
  const [visible, setVisible] = useState(false);

  const handleMenuToggle = () => {
    setVisible(!visible);
  };

  return (
    <li className='RetroBoardCard'>
      <div className='RetroBoardCard__headline'>
        <h4>{headline}</h4>
        <div className='RetroBoardCard__control'>
          <span onClick={handleMenuToggle}>⋮</span>
          <Menu visible={visible}>
            <li>
              <Link to={`/boards/1/card/1`}>Edit Card</Link>
            </li>
            <li>
              <Link to={`/boards/1/card/1`}>Delete Card</Link>
            </li>
          </Menu>
        </div>
      </div>
      <div className='RetroBoardCard__text'>
        <pre>{text}</pre>
      </div>
      <div className='RetroBoardCard__creator'>
        Submitted by <strong>{submitted_by}</strong>
      </div>
    </li>
  );
}

export default RetroBoardCard;
