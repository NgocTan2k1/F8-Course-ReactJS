import logo from './logo.svg';
import './App.css';
import Content2 from './Content2.js';
import Content1 from './Content1.js';
import { useState } from 'react';


function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increase1 = () => {
    setCount1(count1 + 1);
  };

  const increase2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div>
      <Content1 />
      <Content2 count={count2}/>
      <h1>count1: {count1} , count2: {count2}</h1>
      <button onClick={increase1}>Click 1!</button>
      <button onClick={increase2}>Click 2!</button>
    </div>
  );
}

export default App;
