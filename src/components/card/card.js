import React from 'react';
import styles from './card.module.css';
import {
    LikeOutlined,
    DislikeOutlined
} from '@ant-design/icons'

const Card = ({ movie, onDisLikeClick, onLikeClick }) => {

    const avarage = movie.vote_average || 0;
    const avarageRate = 300 / 10 * avarage;

    return (
        <div className={styles.card_container}>
            <div className={styles.image_container}>
                <img className={styles.image} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="product"/>
            </div>
            <div className={styles.card_content}>
                <h3 className={styles.product_title}>
                    {movie?.title}
                </h3>
            </div>
            <div>
                Movie Vote Average: {movie.vote_average}
            </div>
            <div style={{ width: '300px', height: '6px', backgroundColor: 'lightGrey' }}>
                <div style={{ width: `${avarageRate}px`, height: '6px', backgroundColor: 'green' }}>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                {movie.like ? <LikeOutlined style={{ fontSize: '21px', margin: '8px' }} onClick={() => onLikeClick(movie.id)} /> : <div style={{ width: '21px', height: '21px' }}/>}
                {movie.dislike ? <DislikeOutlined style={{ fontSize: '21px', margin: '8px' }} onClick={() => onDisLikeClick(movie.id)} /> : <div style={{ width: '21px', height: '21px' }}/>}
            </div>
        </div>
    );
}

export default Card;
