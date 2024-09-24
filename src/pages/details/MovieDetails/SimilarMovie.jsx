
//https://api.themoviedb.org/3/movie/365177/recommendations

import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

import MovieTypeHead from '../../../components/MovieTypeHead/MovieTypeHead';
import { FetchDataFromApi } from '../../../utils/api';
import Card from '../../../components/card/Card';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setSimilarMovies } from '../../../redux/slice/moviesSlice';
import Slider from 'react-slick';

const SimilarMovie = ({movieId}) => {
    // console.log("movieId" , movieId)
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint : 1440,
                
                    settings : {
                        slidesToShow : 5,
                    }
                
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint : 768,
                    settings : {
                        slidesToShow : 2,
                    }   
            },
            
        ]
    };

    const dispatch = useDispatch();
    const similarMovieData = useSelector((state) => state.movie.recomendedMovie);
    // console.log("similarMovieData" ,similarMovieData)
    // const [endPoint, setEndPoint] = useState("movie");

    const similarMovieApi = () => {
        FetchDataFromApi(`/movie/${movieId}/similar`).then((res) => {
            const similarMData = res?.results;
            dispatch(setSimilarMovies(similarMData));
        });
    };

    useEffect(() => {
        similarMovieApi();
    }, []);

    return (
        <div>
            <ContentWrapper>z
                <div className='flex justify-between w-full py-4'>
                    <MovieTypeHead Movietype={"Similar Videos"} />
              
                </div>
                <Slider {...settings}>
                    {similarMovieData && similarMovieData.map((item, index) => (
                        <Card key={index} cardItem={item} />
                    ))}
                </Slider>
            </ContentWrapper>
        </div>
    );
}

export default SimilarMovie;










