import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import logo from '../assets/gdt-logo.png';

class Header extends Component {
  render() {
    return (
      <Grid>
        <header>
          <Jumbotron>
            <h1 className="text-center">
              <img src={logo} alt="GDT Logo" /> Agile Operations
            </h1>
          </Jumbotron>
        </header>
      </Grid>
    );
  }
}

export default Header;
