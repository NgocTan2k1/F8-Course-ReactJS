import Content from './Content';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import '../App.css';

function AppFilm() {
    const context = useContext(ThemeContext);

    return (
        <div style={{padding: 20}}>
            <button onClick={context.toggleTheme}>Toggle them</button>
            <Content />
        </div>
    )
};

export default AppFilm;