import LS82 from './LS82';
import LS83Heading from './LS83/Heading';
import LS83Paragraph from './LS83/Paragraph';
import LS84 from './LS84';
import LS85 from './LS85/Button';
import LS86 from './LS86';
import LS87 from './LS87/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{ paddingLeft: 40 }}>CSS, SCSS & CSS Modules</h1>
      <LS82 />
      <div style={{marginBottom: 21.44}}>
        <LS83Heading />
        <LS83Paragraph />
      </div>
      <LS84 />
      <LS85 primary/>
      <LS86 />
      <LS87 black primary/>
    </div>
  );
}

export default App;
