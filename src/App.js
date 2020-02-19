import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { increment,decrement,reset } from './store/action'


 

function App(props) {
 
  function handleClickIncrement(){
    props.increment()
  }

  function handleClickDecrement(){
    props.decrement()
  }

  function reset(){
    props.reset()
  }

  return (
    <div >
      <h4 style={{display:"flex",justifyContent:"center"}}>React Awesome Redux</h4>
      <p>{props.counters}</p>
      <button onClick={() => handleClickIncrement()}>+</button>
      <button onClick={() => handleClickDecrement()}>-</button>
      <button onClick={() => reset()}>0</button>
    </div>
  );
}

function mapStateToProps (state)  {
  return {
    counters: state.user.counter
  }
}

export default connect(
  mapStateToProps,
  {increment,decrement,reset}
)(App);
