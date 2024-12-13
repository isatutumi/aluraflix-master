import styles from './BoxShadow.module.css'

function BoxShadow({categoria}) {
    return (
        <div className={styles.boxShadow} style={{color: categoria}}></div>
    )
}

export default BoxShadow;