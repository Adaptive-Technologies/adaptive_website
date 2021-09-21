import { Container } from '@material-ui/core';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <Container>
        <customButton variant={'outlined'} name={'<Home/>'} />
      </Container>
    </>
  );
};

export default Navbar;
