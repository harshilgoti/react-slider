import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { increment,decrement,reset,fetchUser } from './store/action'


 

function App(props) {



  useEffect(()=>{
    props.fetchUser()
  },[]) // eslint-disable-line
 
  function handleClickIncrement(){
    props.increment()
  }

  function handleClickDecrement(){
    props.decrement()
  }

  function reset(){
    props.reset()
  }

  const count = props.counters
  const {name,surName,age} = props.user


  return (
    <div >
      <h4 style={{display:"flex",justifyContent:"center"}}>React Awesome Redux</h4>
      <p>{name}  {surName}</p>
    
      <p>{age}</p>
      <p>{count}</p>
      <button onClick={() => handleClickIncrement()}> + </button>
      <button onClick={() => handleClickDecrement()}> - </button>
      <button onClick={() => reset()}> 0 </button>
    </div>
  );
}

function mapStateToProps (state)  {
  const { counter } = state.counter
  const { userData } = state.user
  return {
    counters: counter,
    user:userData
  }
}

export default connect(
  mapStateToProps,
  {increment,decrement,reset,fetchUser}
)(App);
