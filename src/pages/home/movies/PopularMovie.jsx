import React, { useEffect, useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTab from '../../../components/switchTab/SwitchTab';
import MovieTypeHead from '../../../components/MovieTypeHead/MovieTypeHead';
import { FetchDataFromApi } from '../../../utils/api';
import Card from '../../../components/card/Card';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setPopular } from '../../../redux/slice/moviesSlice';
import Slider from 'react-slick';

const PopularMovie = () => {

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
    const popularMovieData = useSelector((state) => state.movie.popular);

    const [endPoint, setEndPoint] = useState("movie");

    const trendingMovieApi = () => {
        FetchDataFromApi(`/${endPoint}/popular`).then((res) => {
            const popularData = res.results;
            dispatch(setPopular(popularData));
        });
    };

    useEffect(() => {
        trendingMovieApi();
    }, [endPoint]);

    const onTabChange = (selectedTab) => {
        if (selectedTab === "Movies") {
            setEndPoint("movie");
        } else {
            setEndPoint("tv");
        }
    };

    return (
        <div>
            <ContentWrapper>
                <div className='flex justify-between w-full py-4'>
                    <MovieTypeHead Movietype={"Popular Movies"} />
                    <SwitchTab 
                        data={["Movies", "Tv Shows"]} 
                        onTabChange={onTabChange} 
                        setEndPoint={setEndPoint}
                    />
                </div>
                <Slider {...settings} >
                    {popularMovieData && popularMovieData.map((item, index) => (
                        <Card key={index} cardItem={item} />
                    ))}
                </Slider>
            </ContentWrapper>
        </div>
    );
}

export default PopularMovie;
