import styles from './Botao.module.css';
import { Link, useLocation } from 'react-router-dom'

export const Botao =({url, children}) => {
    const paginaAtual = useLocation()

    let classeBotao = ''

    if (paginaAtual.pathname === '/') {
        if (url === './') {
            classeBotao = styles.botaoDestacado
        } else {
            classeBotao = styles.botao
        }
    } else if (paginaAtual.pathname === '/addVideo') {
        if (url === './addVideo') {
            classeBotao = styles.botaoDestacado
        } else {
            classeBotao = styles.botao
        }
    } else {
        classeBotao = styles.botao
    }

    return (
        <Link to={url} className={classeBotao}>
            {children}
        </Link>
    )
}

export const BotaoFormulario = ({type, children}) => {
    const classeBotao = type === 'submit' ? styles.botaoDestacado : styles.botao;

    return (
        <button className={classeBotao} type={type}>
            {children}
        </button>
    )
}
