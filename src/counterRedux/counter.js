import React from 'react';
import './CounterCss.css';
import { useSelector, useDispatch } from 'react-redux';
import {Increment,Descrement} from './actions/Actions'

function Counter() {
  
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button className="button" onClick={() => dispatch(Increment())} >+</button>
      <br/>
      <h className="number"> {count} </h>
      <br/>
      <button className="button" onClick={() => dispatch(Descrement())}>-</button>
    </div>
  );
}
export default Counter;