import styles1 from './Heading.module.css';
import styles2 from'../index.module.css';

function LS83Heading() {
    return (
        <div className={styles2.heading83}>
            <h1 >LS83 - CSS modules</h1>
            <h2 className={styles1.heading}>Heading LS83</h2>
        </div>
    )
}

export default LS83Heading;