import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TaskPage(props) {

  var logo = "https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Purse-256.png"
  return(
    <React.Fragment>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Wallet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/add">Agregar</Nav.Link>
            <Nav.Link href="/balance">Consultar</Nav.Link>
            <Nav.Link href="/recharge">Recargar</Nav.Link>
            <Nav.Link href="/pay">Pagar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <div className="page">
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default TaskPage;