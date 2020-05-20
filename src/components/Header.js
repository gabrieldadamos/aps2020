import React from 'react';
import Menu from './Menu';
import Banner from './Banner';

const Header = () => {
  return (
    <>
      <Menu nomeApp="Sustenta Shop" />
      <Banner />
    </>

  );
}

export default Header;