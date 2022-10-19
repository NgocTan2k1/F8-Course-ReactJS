import clsx from 'clsx'
import styles from './Button.module.css';

function Button({ primary }) {

    const classes = clsx( styles.btn, {
        [styles.primary]: primary,
    });

    return (
        <div className={styles.heading85}>
            <h1 >LS85 - Library clsx and classnames</h1>
            <button className={classes}>
                Click Me1!
            </button>
        </div>
    )
}

export default Button;