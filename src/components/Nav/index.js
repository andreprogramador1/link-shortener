import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import {Container} from './style'

export const Nav = () => {
  return(
    <Container>
      <h1>Shortly</h1>
      <MenuIcon color="disabled" fontSize="large"/>
    </Container>
  );
}