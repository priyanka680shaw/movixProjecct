import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import poster from "./no-poster.png";
import SkeletonCard from '../skeleton/SkeletonCard';

const Card = ({ cardItem }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgBaseurl = "https://image.tmdb.org/t/p/original/";

  const {
    release_date,
    title,
    media_type,
    backdrop_path,
    vote_average,
    first_air_date,
    original_name,
    id
  } = cardItem;

  const imageSrc = backdrop_path ? `${imgBaseurl}${backdrop_path}` : poster;

  // This effect ensures the skeleton is shown until the image is loaded
  useEffect(() => {
    setImageLoaded(true); // Start with the assumption that the image is not loaded
  }, [cardItem]);

  // Function to determine the color of the rating circle
  const getColor = (rating) => {
    if (rating >= 7) return '#4caf50'; // Green for high ratings
    if (rating >= 4) return '#ff9800'; // Orange for medium ratings
    return '#f44336'; // Red for low ratings
  };

  return (
    <>
      {!imageLoaded ? (
        // Show SkeletonCard while the image is loading
        <SkeletonCard />
      ) : (
        // Once the image is loaded, show the actual content
        <div className={`lg:w-[200px] lg:h-[450px] m-2 cursor-pointer flex items-center flex-col`}>
          <NavLink to={`/details/${id}`}>
            <div className='imageContainer relative'>
              <img
                src={imageSrc}
                className={`w-[200px] h-[300px] rounded-3xl mb-2`}
                onLoad={() => setImageLoaded(true)} // Set imageLoaded to true when the image is fully loaded
                alt={title || original_name}
              />

              <div className="rating w-[30px] h-[30px] absolute left-6 bottom-[-15px] bg-black text-white rounded-full">
                <CircularProgressbar
                  value={vote_average * 10}
                  text={vote_average.toFixed(1)}
                  styles={buildStyles({
                    pathColor: getColor(vote_average),
                    textSize: '40px', // Increase the font size
                    fontWeight: 'extrabold', // Increase the font weight
                  })}
                />
              </div>
            </div>
          </NavLink>

          <div className='flex flex-col'>
            <div className='px-2'>
              <p className='font-semibold text-l text-white'>
                {title || original_name}
              </p>
              <p className='font-semibold text-l text-white'>
                {release_date || first_air_date}
              </p>
              <p className='font-semibold text-l text-white'>
                {media_type}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
