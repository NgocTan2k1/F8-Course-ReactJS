import logo from './logo.svg';
import './App.css';
import Content from './Content.js';
import {useState, useCallback} from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount( count => count + 1);
  }, []);

  return (
    <div>
      <Content onIncrease={handleIncrease}/>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
