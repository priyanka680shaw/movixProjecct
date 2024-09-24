import React, { useEffect, useState } from 'react';
import poster from "./no-poster.png";
import SkeletonCircleCard from '../skeleton/SkletionCircleCard';

const CircleCard = ({ cardItem }) => {
  const [isLoading, setIsLoading] = useState(true);
  const imgBaseurl = "https://image.tmdb.org/t/p/original";
  const { profile_path, name, character } = cardItem;

  const imgUrl = profile_path ? `${imgBaseurl}${profile_path}` : poster;

  const handleImageLoad = () => {
    setIsLoading(false);
  };
useEffect(()=>{
  setIsLoading(false)
} , [cardItem])
  return (
    <>
      {isLoading ? (
        <SkeletonCircleCard />
      ) : (
        <div className="w-[200px] flex justify-center items-center flex-col my-6 ">
          <div className="imageContainer relative ">
            <img
              src={imgUrl}
              className="w-[150px] h-[150px]    rounded-full bg-blue-500"
              onLoad={handleImageLoad}
              alt={name || "Profile"}
            />
          </div>
          <div className="flex flex-col text-center">
            <div className="px-2">
              <p className="font-semibold text-l text-white">
                {name}
              </p>
              <p className="font-semibold text-l text-white">
                {character}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CircleCard;
