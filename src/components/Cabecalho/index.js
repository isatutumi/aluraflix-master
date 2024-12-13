import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';
import logo from './logo.png';
import { Botao } from 'components/Botao';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <>
                <Link to='./'>
                    <img className={styles.logo} src={logo} alt='Logo AluraFlixs'></img>
                </Link>

                <nav className={styles.menu}>
                    <Botao condition='true' url='./'>
                        Home
                    </Botao>
                    <Botao condition='true' url='./addVideo'>
                        Novo vídeo
                    </Botao>
                </nav>
            </>
        </header>
    )
}

export default Cabecalho;