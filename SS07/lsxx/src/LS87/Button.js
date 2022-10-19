import clsx from 'clsx'
import styles from './Button.module.scss';

function Button({ primary, black }) {

    const classes = clsx( styles.btn, {
        [styles.black]: black,
        [styles.primary]: primary,
    });

    //css overwrite

    return (
        <div className={styles.heading85}>
            <h1 >LS87 - Install SASS to use SCSS</h1>
            <button className={classes}>
                Click Me1!
            </button>
        </div>
    )
}

export default Button;