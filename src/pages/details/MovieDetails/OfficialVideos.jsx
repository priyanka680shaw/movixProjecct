

import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import VideoCard from '../../../components/card/VideoCard';
import MovieTypeHead from '../../../components/MovieTypeHead/MovieTypeHead';
import { FetchDataFromApi } from '../../../utils/api';
import Card from '../../../components/card/Card';
import SkletionVideoCard from '../../../components/skeleton/SkletionVideoCard';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setOfficialVideo } from '../../../redux/slice/moviesSlice';
import Slider from 'react-slick';

const OfficialVideos

 = ({movieId}) => {

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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const dispatch = useDispatch();
    const officialVideoData = useSelector((state) => state.movie.officialVideo);

//    console.log("officialVideoData" , officialVideoData)

    const officialVideoApi = () => {
        FetchDataFromApi(`/movie/${movieId}/videos`).then((res) => {
            //  console.log("official" , res)
            const officialVideo = res.results;
            dispatch(setOfficialVideo(officialVideo));
        });
    };

    useEffect(() => {
        officialVideoApi();
    }, [movieId]);

    return (
        <div>
            
              
                <ContentWrapper>
                      {
                        !officialVideoData ? <SkletionVideoCard/> :
                       <>
                             <div className='flex justify-between w-full py-4'>
                            <MovieTypeHead Movietype={"Official Videos"} />
                        </div>
                        <Slider {...settings} className = "slider">
                            {officialVideoData && officialVideoData.map((item, index) => (
                                <VideoCard key={index} cardItem={item} />
                            ))}
                        </Slider>
                       </>
                      }
            </ContentWrapper>
            
            
        </div>
    );
}

export default OfficialVideos

;








