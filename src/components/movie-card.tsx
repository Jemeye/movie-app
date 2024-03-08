import React from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
    movie : {
        id: string
        name: string
        director: string
        year: string
        synopsis: string
        duration: string
        category: string
        image: string
        trailer: string
    }
}

const MovieCard: React.FC<MovieCardProps> = (props) => {

    return (
        <Link className='category-card --movie' to={`/movie/${props.movie.id}`}>
            <h3 className='category-card__title'>{props.movie.name}</h3>
            <img className='category-card__image' src={props.movie.image}></img>
        </Link>
    )
}

export default MovieCard
