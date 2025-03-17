import React from 'react';
import { Outlet } from 'react-router';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NewsList from './NewsList';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter , Routes, Route, Link} from 'react-router';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const  NoticiasLayout =()=>{
    return (
        <div className="App">
          <header>
          <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">Noticias</Navbar.Brand>               
            </Container>
          </Navbar>
        </header>
        <Container>
              <Row>
              <Col>
                    <Outlet />
                </Col>
              </Row>    
        </Container>
    </div>
    );
}

export default NoticiasLayout;