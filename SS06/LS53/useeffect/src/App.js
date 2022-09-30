import Content from './Content.js';
import Content1 from './Content1.js';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

    return (
        <div className="App">
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <Content1 />}
        </div>
    );
}

export default App;
