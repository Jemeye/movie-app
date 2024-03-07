import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import MovieCard from '../components/movie-card';


const ContentCategory: React.FC = () => {

    return (
        <>
            <Header></Header>
            <div className="container">
                <div className='category-container'>
                    <h2>Name Category</h2>
                    <div className='category-grid --movie'>
                        {[...Array(8)].map((_, index) => (
                            <MovieCard key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default ContentCategory
