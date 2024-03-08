import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
    name: string;
    image: string;
    endpoint: string;
}

const CategoryCard: React.FC<CategoryCardProps> = (props) => {

    return (
        <Link className='category-card' to={`/category/${props.endpoint}`}>
            <h3 className='category-card__title'>{props.name}</h3>
            <img className='category-card__image' src={props.image}></img>
        </Link>
    )
}

export default CategoryCard
