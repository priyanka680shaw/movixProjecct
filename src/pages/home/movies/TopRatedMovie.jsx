import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTab from '../../../components/switchTab/SwitchTab';
import MovieTypeHead from '../../../components/MovieTypeHead/MovieTypeHead';
import { FetchDataFromApi } from '../../../utils/api';
import { useEffect, useState } from 'react';
import Card from '../../../components/card/Card';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setTopRated } from '../../../redux/slice/moviesSlice';
import Slider from 'react-slick';

const TopRatedMovie = () => {

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
    const topRatedMovieData = useSelector((state) => state.movie.topRated);

    const [endPoint, setEndPoint] = useState("movie");

    const fetchTopRatedMovies = () => {
        FetchDataFromApi(`/${endPoint}/top_rated`).then((res) => {
            const topRatedData = res.results;
            dispatch(setTopRated(topRatedData));
        });
    };

    useEffect(() => {
        fetchTopRatedMovies();
    }, [endPoint]);

    const onTabChange = (selectedTab) => {
        setEndPoint(selectedTab === "Movies" ? "movie" : "tv");
    };

    return (
        <div>
            <ContentWrapper>
                <div className='flex justify-between w-full py-4'>
                    <MovieTypeHead Movietype={"Top Rated Movie"} />
                    <SwitchTab data={["Movies", "Tv Shows"]} onTabChange={onTabChange} setEndPoint={setEndPoint}/>
                </div>
                <Slider {...settings}>
                    {topRatedMovieData && topRatedMovieData.map((item) => (
                        <Card key={item.id} cardItem={item} />  // Use item.id as the key
                    ))}
                </Slider>
            </ContentWrapper>
        </div>
    );
};

export default TopRatedMovie;
