//https://api.themoviedb.org/3/movie/365177/recommendations

import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

import MovieTypeHead from '../../../components/MovieTypeHead/MovieTypeHead';
import { FetchDataFromApi } from '../../../utils/api';
import Card from '../../../components/card/Card';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setRecomeded } from '../../../redux/slice/moviesSlice';
import Slider from 'react-slick';

const RecomenddedMovie = ({movieId}) => {
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
    const recomendedMovieData = useSelector((state) => state.movie.recomendedMovie);
    // console.log("recomendedData" ,recomendedMovieData)
    // const [endPoint, setEndPoint] = useState("movie");

    const recommendationsMovieApi = () => {
        FetchDataFromApi(`/movie/${movieId}/recommendations`).then((res) => {
            const recomendedData = res.results;
            dispatch(setRecomeded(recomendedData));
        });
    };

    useEffect(() => {
        recommendationsMovieApi();
    }, []);

    return (
        <div>
            <ContentWrapper>
                <div className='flex justify-between w-full py-4'>
                    <MovieTypeHead Movietype={"Recommendations"} />
              
                </div>
                <Slider {...settings}>
                    {recomendedMovieData && recomendedMovieData.map((item, index) => (
                        <Card key={index} cardItem={item} />
                    ))}
                </Slider>
            </ContentWrapper>
        </div>
    );
}

export default RecomenddedMovie;




