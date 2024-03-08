import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import YouTube, { YouTubeProps } from 'react-youtube';
import { useParams } from 'react-router-dom';
import { firebaseService } from '../service/firebase';

const ContentDetails: React.FC = () => {

    const { movieId } = useParams<{ movieId: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);

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
            if (movieId) {
                const api = firebaseService();
                const data = await api.getMovieById(movieId);
                setMovie(data);
            }
        };
        fetchData();
    }, [movieId]);

    const opts: YouTubeProps['opts'] = {
        playerVars: {
          autoplay: 0,
        },
      };

      if (!movie) {
        return null;
    }

    return (
        <>
            <Header></Header>
            <div className="container">
                <div className='movie-container'>
                    <div className='movie-image'>
                        <img className='movie-image__image' src={movie?.image}></img>
                    </div>
                    <div className='movie-details'>
                        <h1 className='movie-details__title'>{movie?.name}</h1>
                        <p className='movie-details__description'>{movie?.synopsis}</p>
                        <ul>
                            <li className='movie-details__item'><span>Director:</span> {movie?.director}</li>
                            <li className='movie-details__item'><span>Year: </span> {movie?.year}</li>
                            <li className='movie-details__item'><span>Category: </span> {movie?.category}</li>
                            <li className='movie-details__item'><span>Duration:</span> {movie?.duration}</li>

                        </ul>
                    </div>
                    <div className='movie-trailer'>
                        <h3 className=''>Trailer</h3>
                        <YouTube videoId={movie?.trailer} opts={opts} className='movie-trailer__video'></YouTube>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default ContentDetails
