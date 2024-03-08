import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import MovieCard from '../components/movie-card';
import { useParams } from 'react-router-dom';
import { firebaseService } from '../service/firebase';

const ContentCategory: React.FC = () => {

    const { categoryId } = useParams<{ categoryId: string }>();
    const [movies, setMovies] = useState<Array<Movie>>([]);

    interface Movie {
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

    useEffect(() => {
        const fetchData = async () => {
            if (categoryId) {
                const api = firebaseService();
                const data = await api.getMoviesData(categoryId);
                setMovies(data);
            }
        };
        fetchData();
    }, [categoryId]);

    return (
        <>
            <Header></Header>
            <div className="container">
                <div className='category-container'>
                    <h2>{categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : 'Category'}</h2>
                    <div className='category-grid --movie'>
                        {movies.map((movie: Movie, index: number) => (
                            <MovieCard key={index} movie={movie} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default ContentCategory
