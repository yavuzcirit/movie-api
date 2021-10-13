
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Spin, Col, Row } from 'antd';

// components
import Card from 'components/card'

// styles
import styles from './movies.module.css';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const handleLikeClick = (id) => {
        console.log({ id });
        setMovies(prevState => {
            return prevState.map(movie => {
                if (movie.id === id) {
                    if (movie.like && movie.dislike) {
                        movie.dislike = 0;
                        movie.like = 1;
                    } else if (!movie.dislike) {
                        movie.like = 1;
                        movie.dislike = 1;
                    }
                }

                return movie;
            })
        })
    }

    const handleDislikeClick = (id) => {
        setMovies(prevState => {
            return prevState.map(movie => {
                if (movie.id === id) {
                    if (movie.dislike && movie.like) {
                        movie.dislike = 1;
                        movie.like = 0;
                    } else if (!movie.like) {
                        movie.dislike = 1;
                        movie.like = 1;
                    }
                }

                return movie;
            })
        })
    }

    useEffect(() => {

        axios.get('https://api.themoviedb.org/4/list/1?api_key=3219a499938373a16d619c20a83ba766')
        .then(function (response) {
            // handle success

            const data = response.data.results;
            if (data.length) {
                const newData = data.map(el => ({ ...el, like: 1, dislike: 1 }))
                setMovies(newData);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }, []);

    return (
        <div className={styles.container}>
            <Row gutter={[16, 16]} className={styles.row} style={{flexFlow:'row nowrap',overflowX:'scroll'}}>
                {movies.length ?
                    movies.map((movie, index) => {
                        return (
                            <Col className={styles.col} span={8} key={movie.id}>
                                <Card onDisLikeClick={handleDislikeClick} onLikeClick={handleLikeClick} key={index} movie={movie} />
                            </Col>
                        )
                    }) :  <div style={{ position: 'absolute', top: '50%', left: '50%' }}>
                        <Spin />
                    </div>
                }
                </Row>
        </div>
    );
}

export default Movies;