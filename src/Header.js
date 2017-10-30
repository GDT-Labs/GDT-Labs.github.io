import React from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import logo from './gdt-logo.png';

const Header = () => (
  <Grid>
    <header>
      <Jumbotron>
        <h1 className="text-center">
          <img src={logo} alt="GDT Logo" /> Open Source
        </h1>
      </Jumbotron>
    </header>
  </Grid>
);

export default Header;
