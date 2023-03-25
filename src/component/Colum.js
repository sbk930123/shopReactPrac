/* eslint-disable */

import React from 'react'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

function Colum(props) {

  let navigate = useNavigate();

  return (
    <div className="col-md-4">
      <img onClick={() => {navigate('/detail/'+ props.i +'')}} src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} width='80%'></img>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].price}</p>
    </div>
  )
}

export default Colum;