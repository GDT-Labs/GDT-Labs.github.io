import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import logo from './assets/gdt-logo.png';
import board from './assets/scp-board.png';

class Header extends Component {
  render() {
    return (
      <Grid>
        <header>
          <Jumbotron>
            <h1 className="text-center">
              <img src={logo} alt="GDT Logo" /> Agile Operations
            </h1>
            <br/>
            <div className="text-center">
              <a href={board} target="_blank">
                <img src={board} alt="SCP Board" width="50%" />
              </a>
            </div>
          </Jumbotron>
        </header>
      </Grid>
    );
  }
}

export default Header;
