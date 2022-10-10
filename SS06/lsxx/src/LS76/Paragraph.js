import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

function Paragraph() {
    
    const context = useContext(ThemeContext);

    return (
        <p className={context.theme}>
            Đó là lần cuối rồi, không có lần sau nữa...
        </p>
    )
}

export default Paragraph;