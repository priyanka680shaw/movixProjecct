import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTab from '../../../components/switchTab/SwitchTab';
import MovieTypeHead from '../../../components/MovieTypeHead/MovieTypeHead';
import { FetchDataFromApi } from '../../../utils/api';
import { useEffect, useState } from 'react';
import Card from '../../../components/card/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//skletion
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setTrending } from '../../../redux/slice/moviesSlice';  // Corrected typo

const TrendingMovie = () => {  // Renamed the component to correct the typo
    // Carousel settings for horizontal scrolling
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
    const trendingMovieData = useSelector((state) => state.movie.trending);  // Corrected typo
    // console.log("trenddingMovie" , trendingMovieData)
    const [endPoint, setEndPoint] = useState("day");
    // console.log("ensPointtTrendding" , endPoint)
    function trendingMovieApi() {
        FetchDataFromApi(`/trending/movie/${endPoint}`).then((res) => {
            const trendingData = res.results;
            dispatch(setTrending(trendingData));  // Corrected typo
        });
    }

    useEffect(() => {
        trendingMovieApi();
    }, [endPoint]);

    const onTabChange = (selectedTab) => {
        setEndPoint(selectedTab === "Days" ? "day" : "week");
    };

    return (
        <div>
            <ContentWrapper>
            <div className='flex justify-between w-full py-4 '>
                    <MovieTypeHead Movietype={"Trending Movies"}  />
                    <SwitchTab 
                        data={["Days", "Week"]} 
                        setEndPoint={setEndPoint}
                        onTabChange={onTabChange} 
                    />
                </div>
                <Slider {...settings}>
                    {trendingMovieData && trendingMovieData.map((item, index) => (
                        <Card key={index} cardItem={item} />
                    ))}
                </Slider>
            </ContentWrapper>
        </div>
    );
};

export default TrendingMovie;  // Renamed for clarity
