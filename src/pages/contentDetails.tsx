import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import YouTube, { YouTubeProps } from 'react-youtube';

const ContentDetails: React.FC = () => {

    const opts: YouTubeProps['opts'] = {
        playerVars: {
          autoplay: 0,
        },
      };

    return (
        <>
            <Header></Header>
            <div className="container">
                <div className='movie-container'>
                    <div className='movie-image'>
                        <img className='movie-image__image' src="https://picsum.photos/200"></img>
                    </div>
                    <div className='movie-details'>
                        <h1 className='movie-details__title'>The Godfather</h1>
                        <p className='movie-details__description'>An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.</p>
                        <ul>
                            <li className='movie-details__item'><span>Director:</span> Frank Darabont</li>
                            <li className='movie-details__item'><span>Year: </span> 1994</li>
                            <li className='movie-details__item'><span>Category: </span> Crime</li>
                            <li className='movie-details__item'><span>Duration:</span> 175m</li>

                        </ul>
                    </div>
                    <div className='movie-trailer'>
                        <h3 className=''>Trailer</h3>
                        <YouTube videoId="X-jdl9hcCeg" opts={opts} className='movie-trailer__video'></YouTube>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default ContentDetails
