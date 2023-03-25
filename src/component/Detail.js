/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Detail(props) {
  let {productNumber} = useParams();

  let [input, setInput] = useState('');

  let filter = props.shoes.find((a) => {
    return (
      a['id'] == productNumber
    )
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes"+ (props.shoes[productNumber]['id'] + 1) +".jpg"} width="100%" />
        </div>
      {
        filter['id'] == productNumber ? (
          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[productNumber].title}</h4>
            <p>{props.shoes[productNumber].content}</p>
            <p>{props.shoes[productNumber].price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        ) : null
      }
      </div>
    </div>
  )
}

export default Detail;