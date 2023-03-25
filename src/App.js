/* eslint-disable */

import logo from './logo.svg';
import './App.css';
// boostrap
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './component/Detail';
import Colum from './component/Colum';
import styled from 'styled-components';

function App() {

  let [shoes, setShoes] = useState(data);

  let navigate = useNavigate();

  return (
    <div className="App">
    {/* bodyStart */}
      <Navbar bg="light" variant="light" className='header-nav'>
        <Container>
          <Navbar.Brand href="#home">SBK</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}} href="#home">Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/Detail')}} href="#features">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* RoutesStart */}
      <Routes>
        <Route path='/' element={
          <>
          <div className='main-bg'></div>

          <div className="container">
            <div className="row">
              {shoes.map((a, i) => {
                return (
                  <Colum shoes={shoes} setShoes={setShoes} i={i} key={i}></Colum>
                )
              })}
            </div>
          </div> 
          </>
        }></Route>
        <Route path='/detail/:productNumber' element={<Detail shoes={shoes}></Detail>}></Route>

        <Route path='/about' element={<About></About>}>
          <Route path='member' element={<div>멤버페이지임</div>}></Route>
          <Route path='location' element={<div>위치정보임</div>}></Route>
        </Route>

        <Route path='/event' element={<Event></Event>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
      {/* RoutesEnd */}

    {/* bodyEnd */}
    </div>
  );
}

function Event() {
  return (
    <div className='Event'>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  )
}

function About() {
  return (
    <div className='About'>
      <h1>회사정보임</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
