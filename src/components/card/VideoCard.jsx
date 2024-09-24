/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import poster from "./no-poster.png";
import PlayButton from '../playButton/PlayButton';
import SkletionVideoCard from '../skeleton/SkletionVideoCard';
import VideoPopUp from '../../pages/details/MovieDetails/VideoPopUp';

const VideoCard = ({ cardItem }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { key, name } = cardItem;
  const [videoType, setVideoType] = useState("normalCard");

  // Pop-up state
  const [showPopUp, setShowPopUp] = useState(false);

  const imgUrl = key ? `https://img.youtube.com/vi/${key}/mqdefault.jpg` : poster;

  // Simulate data loading (optional timer if needed)
  useEffect(() => {
    setIsLoading(false); // Start loading when the component mounts or key changes
  }, [cardItem]);

  return (
    <>
      <div>
        {/* Skeleton Loader when data is loading */}
        {isLoading ? (
          <SkletionVideoCard />
        ) : (
          <>
            {/* Show VideoPopUp if showPopUp is true */}
            {showPopUp && (
              <VideoPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} videoId={key} videoType={videoType} />
            )}

            <div className="h-[200px] lg:m-4 m-2 cursor-pointer relative group">
              <div className="imageContainer relative flex justify-center items-center">
                <img
                  src={imgUrl}
                  className="w-[250px] h-[200px] rounded-3xl m-2 object-cover"
                  alt={name || "Video thumbnail"}
                  onLoad={() => setIsLoading(false)}  // Set isLoading to false after the image is loaded
                />

                {/* Gradient Overlay */}
                <div className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

                {/* Play Button */}
                <div className="flex justify-center items-center absolute top-0 w-full h-full rounded-3xl" onClick={() => {
                  setShowPopUp(true);
                  setVideoType("normalCard");
                }}>
                  <PlayButton />
                </div>
              </div>

              {/* Video name */}
              <div className="flex flex-col">
                <div className="px-2">
                  <p className="font-semibold text-l text-white text-center">{name}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default VideoCard;
