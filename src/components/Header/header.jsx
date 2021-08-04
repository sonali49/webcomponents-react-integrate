import React from 'react';
import './header.scss';

export const Header = ({ title }) => {
  return (
    <header className="main-header">
      <span>{ title }</span>
    </header>
  );
};

export default Header;