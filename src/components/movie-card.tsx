import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard: React.FC = () => {

    return (
        <Link className='category-card --movie' to={"/"}>
            {/* <h3 className='category-card__title'>Name</h3> */}
            <img className='category-card__image' src="https://picsum.photos/200"></img>
        </Link>
    )
}

export default MovieCard
