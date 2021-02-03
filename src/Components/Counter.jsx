import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {increment,decrement} from '../redux/Duck/Counter'


function Counter(props) {
    const {name}=props;
    const [vote,setVote]=useState(0);
    const dispatch=useDispatch();
    function handleClickIncrement(){
        dispatch(increment());
        setVote(vote+1);
    }
    function handleClickDecrement(){
        dispatch(decrement());
        setVote(vote-1);
    }


  return (
    <div className="contact-list" >
    <h3 className="contact-name">{name}</h3>
    <h4>Vote Count:{vote}</h4>
    <button className='contact-button1' onClick={handleClickDecrement} >DECERMENT</button>
    <button className='contact-button2' onClick={handleClickIncrement}>INCREMENT</button>
    </div>
  );
}

export default Counter;
