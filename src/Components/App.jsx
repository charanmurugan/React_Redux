import React from 'react';
import { useSelector } from 'react-redux';
import Counter from './Counter';


function App() {
  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo"
  ];
  const totalVote=useSelector((state) => state.counter.count)
  return (
    <div >
    <h1 className="title">Simple React Redux</h1>
    <h2 className="total-title">The Total Votes :{totalVote}</h2>
    {voters.map((voter) => (
        <Counter name={voter} />
      ))}
     
    </div>
  );
}

export default App;
