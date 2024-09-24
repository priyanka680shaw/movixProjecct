import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import OfficialVideos from './MovieDetails/OfficialVideos';
import RecomenddedMovie from './MovieDetails/Recommendations';
import SimilarMovie from './MovieDetails/SimilarMovie';
import TopCast from './MovieDetails/TopCast';
import DetailsCard from '../../components/card/DetailsCard';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile screens
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <div className="herobanner">
        <DetailsCard movieId={id} />
      </div>

      {/* <div className="my-6 mx-auto px-4 md:px-8 lg:px-12"> */}
      <div>
        
          <TopCast movieId={id} />
       
      </div>

      {/* <div className="my-6 mx-auto px-4 md:px-8 lg:px-12"> */}
      <div>
          <OfficialVideos movieId={id} />
       
      </div>

      {/* <div className="my-6 mx-auto px-4 md:px-8 lg:px-12"> */}
      <div>
          <SimilarMovie movieId={id} />
       
      </div>

      {/* <div className="my-6 mx-auto px-4 md:px-8 lg:px-12"> */}
      <div>
          <RecomenddedMovie movieId={id} />
       
      </div>
    </div>
  );
};

export default Details;
