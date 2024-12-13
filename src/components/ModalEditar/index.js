import { useEffect, useState } from 'react'
import styles from './ModalEditar.module.css'

import { MdOutlineCancel } from "react-icons/md"
import CampoFormulario from 'components/CampoFormulario'
import ListaSuspensa from 'components/ListaSuspensa'
import Textarea from 'components/Textarea'
import { BotaoFormulario } from 'components/Botao'

function ModalEditar({video, aoSalvar, aoFecharModal, categorias}) {
    const [titulo, setTitulo] =useState('')
    const [descricao, setDescricao] =useState('')
    const [link, setLink] =useState('')
    const [imagem, setImagem] =useState('')
    const [categoria, setCategoria] =useState('')

    useEffect(() => {
        if (video) {
            setTitulo(video.titulo)
            setDescricao(video.descricao)
            setLink(video.link)
            setImagem(video.imagem)
            setDescricao(video.descricao)
        } else {
            setTitulo('');
            setDescricao('');
            setLink('');
            setImagem('');
            setDescricao('');
        }
    }, [video])

    const submit = (event) => {
        event.preventDefault();
        const videoAtualizado = {
            id: video.id,
            titulo,
            descricao,
            link,
            imagem,
            categoria
        }
        aoSalvar(videoAtualizado)
        aoFecharModal()
    }

    return (
        <>
            {video && <>
                <div className={styles.overlay}/>
                <dialog open={!!video} className={styles.modal}>
                    <MdOutlineCancel onClick={aoFecharModal} className={styles.iconeFechar}/>
                    <h1>Editar card</h1>
                    <form onSubmit={submit} method='dialog'>
                        <div className={styles.sessaoCampos}>
                            <div className={styles.campos}>
                                <CampoFormulario
                                    className={styles.compoModal}
                                    label='Título'
                                    placeholder='Insita o título'
                                    valor={titulo}
                                    aoAlterado={valor => setTitulo(valor)}
                                />

                                <ListaSuspensa
                                    obrigatorio={true}
                                    label='Categoria'
                                    placeholder='Selecione uma categoria...'
                                    itens={categorias}
                                    valor={categoria}
                                    aoAlterado={valor => setCategoria(valor)}
                                />

                                <CampoFormulario
                                    obrigatorio={true}
                                    label='Imagem'
                                    placeholder='URL da imagem'
                                    valor={imagem}
                                    aoAlterado={valor => setImagem(valor)}
                                />

                                <CampoFormulario
                                    obrigatorio={true}
                                    label='Vídeo'
                                    placeholder='URL do vídeo'
                                    valor={link}
                                    aoAlterado={valor => setLink(valor)}
                                />

                                <Textarea
                                    obrigatorio={true}
                                    label='Descricao'
                                    placeholder='Sobre o que é esse vídeo?'
                                    valor={descricao}
                                    aoAlterado={valor => setDescricao(valor)}
                                />
                            </div>

                            <div className={styles.botoes}>
                                <BotaoFormulario
                                    children='Guardar'
                                    type='submit'
                                />
                                <BotaoFormulario
                                    children='Limpar'
                                    type='reset'
                                />
                            </div>
                        </div>
                    </form>
                </dialog>
            </>}
        </>
    )
}

export default ModalEditar;