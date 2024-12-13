import styles from './Banner.module.css';
import videoData from '../../json/destaques.json';
import { useEffect, useState, useMemo } from 'react';
import { FcPrevious } from "react-icons/fc"
import { FcNext } from "react-icons/fc"
import { Link } from 'react-router-dom'

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Sorteia os vídeos apenas uma vez
    const sortearVideo = useMemo(() => videoData.sort(() => Math.random() - 0.5), [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sortearVideo.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [sortearVideo.length]); // Alterado para usar a propriedade length como dependência.

    const nextItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sortearVideo.length);
    }

    const prevItem = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sortearVideo.length) % sortearVideo.length);
    }

    const currentItem = sortearVideo[currentIndex];

      // Verifica se o currentItem é definido
    if (!currentItem) return null


    return (
        <section className={styles.container}>
            <div className={styles.fundo}>
                <div className={styles.previousAndNext}>
                    <FcPrevious onClick={prevItem} className={styles.icone}/>
                    <FcNext onClick={nextItem} className={styles.icone}/>
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 style={{backgroundColor: currentItem.cor}}>
                            {currentItem.categoria}
                        </h1>
                        <h2>{currentItem.titulo}</h2>
                        <p>{currentItem.descricao}</p>
                    </div>
                    <div
                        className={styles.minibanner}
                        style={{color: currentItem.cor}}>
                            <img
                                className={styles.imagem}
                                alt={currentItem.titulo}
                                src={currentItem.imagem}>
                            </img>
                            <Link to={`/${currentItem.id}`}>
                                <div 
                                    className={styles.divImg}
                                    style={{color: currentItem.cor}}>
                                </div>
                            </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;