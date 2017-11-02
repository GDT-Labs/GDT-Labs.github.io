import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';

const Navigation = () => (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <NavLink to="/" exact>GDT</NavLink>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">Link Right</NavItem>
      <NavItem eventKey={2} href="#">Link Right</NavItem>
    </Nav>
  </Navbar>
);

export default Navigation;


  // <nav className="navbar navbar-inverse">
  //   <div className="container-fluid">
  //     <div className="navbar-header">
  //       <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
  //         <span className="sr-only">Toggle navigation</span>
  //         <span className="icon-bar"></span>
  //         <span className="icon-bar"></span>
  //         <span className="icon-bar"></span>
  //       </button>
  //       <a className="navbar-brand" href="#">GDT</a>
  //     </div>

  //     <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
  //       <ul className="nav navbar-nav">
  //         <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
  //         <li><NavLink to="/asdf" exact activeClassName="active">Asdf</NavLink></li>
  //         <li className="dropdown">
  //           <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
  //           <ul className="dropdown-menu" role="menu">
  //             <li><a href="#">Action</a></li>
  //             <li><a href="#">Another action</a></li>
  //             <li><a href="#">Something else here</a></li>
  //             <li className="divider"></li>
  //             <li><a href="#">Separated link</a></li>
  //             <li className="divider"></li>
  //             <li><a href="#">One more separated link</a></li>
  //           </ul>
  //         </li>
  //       </ul>
  //       <form className="navbar-form navbar-left" role="search">
  //         <div className="form-group">
  //           <input type="text" className="form-control" placeholder="Search"/>
  //         </div>
  //         <button type="submit" className="btn btn-default">Submit</button>
  //       </form>
  //       <ul className="nav navbar-nav navbar-right">
  //         <li><a href="#">Link</a></li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>