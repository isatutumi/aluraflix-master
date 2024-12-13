import { FaExclamationTriangle } from "react-icons/fa";
import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return (
        <section className={styles.container}>
            <FaExclamationTriangle className={styles.icone}/>
            <h2>Ops!<br/>O conteúdo que você procura não foi encontrado!</h2>
        </section>
    )
}

export default NaoEncontrada;