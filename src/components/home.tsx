import React from 'react';
import CategoryCard from './category-card';

const Home: React.FC = () => {

    return (
        <div className='category-container'>
            <h2>Categories</h2>
            <div className='category-grid'>
                {[...Array(8)].map((_, index) => (
                    <CategoryCard key={index} />
                ))}
            </div>
        </div>
    )
}

export default Home
