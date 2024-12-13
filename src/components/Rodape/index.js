import styles from './Rodape.module.css';
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import logo from './logo.png';
import { Link } from 'react-router-dom';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <Link to='./' className={styles.logo}>
                <img src={logo} alt='Logo Aluraflix'/>
            </Link>
            <h2 className={styles.texto}>
                Desenvolvido por Harumi Tutumi.
            </h2>
            <div className={styles.redes_sociais}>
                <a href='https://github.com/isatutumi' target='_blank' rel='noopener noreferrer'>
                    <IoLogoGithub className={styles.icone} alt='Imagem GitHub'/>
                </a>
                <a href='https://www.linkedin.com/in/isatutumi/' target='_blank' rel='noopener noreferrer'>
                    <IoLogoLinkedin className={styles.icone} alt='Imagem LinkedIn'/>
                </a>
                <a href='https://instagram.com/isatutumi' target='_blank' rel='noopener noreferrer'>
                    <IoLogoInstagram className={styles.icone} alt='Imagem Instagram'/>
                </a>
            </div>
        </footer>
    )
}

export default Rodape;
