/* eslint-disable */

import logo from './logo.svg';
import './App.css';
// boostrap
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './component/Detail';
import Colum from './component/Colum';
import styled from 'styled-components';
import Style from './component/Pstyle'
import axios from 'axios';


let Pstyle = styled.button`
background-color: ${props => props.bg};
color: ${props => props.color};
border: none;
padding: 5px 10px;
border-radius: 5px;
box-shadow:5px 5px rgb(0, 0, 0, .2);

&:hover {
  background-color: ${props => props.hoverbg};
  color: ${props => props.hovercolor};
  border: ${props => props.hoverborder};
}
`

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [btnshow, setBtnshow] = useState(true);
  let [count, setCount] = useState(2);
  let [loadingui, setLoadingui] = useState(false);

  useEffect(() => {
    if (shoes.length === 7) {
      setBtnshow(false);
    }
  }, [shoes]);

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

          {
            btnshow == true ? 
              <>
                {
                  loadingui ? (
                    <div style={{width: '100%', padding: '50px' , backgroundColor: 'grey', color: 'white', textAlign: 'center', fontSize: '50px' }}>로딩 중 ...</div>
                  ) : (
                    <Pstyle
                      hoverbg="white" hovercolor='grey' hoverborder='1px solid grey' 
                      color='white' bg="grey" className='more'
                      onClick={() => {
                        setLoadingui(true);
                        // 이곳!! //
                        axios.get('https://codingapple1.github.io/shop/data'+ count +'.json')
                        .then((result) => {
                          // let copy = [...shoes, ...result.data]
                          // console.log(copy.length);
                          // console.log(shoes.length);
                          shoes.length >= 6 ? (
                            setShoes((e) => e.concat(result.data[0])),
                            setCount(count + 1),
                            setLoadingui(false)
                          ) : shoes.length < 9 ? (
                            setShoes((e) => e.concat(result.data)),
                            setCount(count + 1),
                            setLoadingui(false)
                          ) : setLoadingui(false);;
                        })
                        .catch(() => {
                          console.log('실패');
                          setLoadingui(false);
                          
                        })
                      }}  
                    >상품 더보기</Pstyle>
                  )
                }
              </>
             : null
          }

          
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
