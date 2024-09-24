//https://api.themoviedb.org/3/movie/365177/recommendations

import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

import MovieTypeHead from '../../../components/MovieTypeHead/MovieTypeHead';
import { FetchDataFromApi } from '../../../utils/api';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setTopCast , setTopCrew } from '../../../redux/slice/moviesSlice';
import Slider from 'react-slick';
import CircleCard from '../../../components/card/CircleCard';
import { BsJustify } from 'react-icons/bs';
import SkeletonCircleCard from '../../../components/skeleton/SkletionCircleCard';

const TopCast = ({movieId}) => {
    // console.log("movieId cast" , movieId)
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
                    slidesToShow: 4,
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
                        slidesToShow : 3,
                    }   
            },
            
        ]
    };

    const dispatch = useDispatch();
    const topCastData = useSelector((state) => state.movie.topCast);
    // console.log("topCastData" ,topCastData)
    // const [endPoint, setEndPoint] = useState("movie");

    const topCastApi = () => {
        FetchDataFromApi(`/movie/${movieId}/credits`).then((res) => {

            // console.log("top cast" , res)
            const topCastData = res.cast;
            const crew = res.crew
            // console.log("crew" , crew)
            dispatch(setTopCrew(crew))
            dispatch(setTopCast(topCastData));
        });
    };

   

    useEffect(() => {
        topCastApi();
    }, [movieId]);

    return (
        <div>
        
                 <ContentWrapper>
                           {
                             !topCastData ? <SkeletonCircleCard/> : 
                             <>
                             <div className='flex justify-between w-full py-4'>
                             <MovieTypeHead Movietype={"Top Cast"} />
                       
                         </div>
                         <Slider {...settings} >
                             {topCastData && topCastData.map((item, index) => (
                                 <CircleCard key={index} cardItem={item} />
                             ))}
                         </Slider>
                             </>
                           }
                
            </ContentWrapper>
            
           
        </div>
    );
}

export default TopCast;







