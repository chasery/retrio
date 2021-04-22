import React from 'react';
import './Menu.css';

function Menu(props) {
  const { visible, children } = props;

  return <ul className={`Menu ${visible ? 'visible' : ''}`}>{children}</ul>;
}

export default Menu;
