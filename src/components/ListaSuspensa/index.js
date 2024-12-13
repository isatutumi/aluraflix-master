import styles from './ListaSuspensa.module.css';

function ListaSuspensa({label, aoAlterado, valor, obrigatorio = false, itens, palceholder}) {
    return (
        <div className={styles.listaSuspensa}>
            <label>{label}</label>
            <select className={styles.campoInput}
                palceholder={palceholder}
                onChange={evento => aoAlterado(evento.target.value)}
                required={obrigatorio}
                value={valor}>
                    <option className={styles.opcoes} value=''>
                        Selecione uma categoria...
                    </option>
                {itens.map(item => {
                    return <option className={styles.opcoes} key={item}>
                        {item}
                    </option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;