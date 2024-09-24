/* eslint-disable react/prop-types */
import ReactPlayer from 'react-player';

const VideoPopUp = ({ setShowPopUp, videoId, videoType }) => {
  console.log(videoType);

  const videoClass = videoType === 'trailer' ? 'h-4/5 w-4/5' : 'w-[200px] h-[180px]';

  return (
    <div className={`videopopup rounded-full absolute top-0 z-50 flex justify-center items-center ${videoType === 'trailer' ? 'w-[100%] h-[90%]' : 'w-[230px] h-[300px]'}`}>
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-white text-2xl bg-black/50 p-2 rounded cursor-pointer"
        onClick={() => setShowPopUp(false)}
      >
        ❌
      </button>
      {/* Video Player */}
      <div className="w-full h-full">
        <ReactPlayer
          className={videoClass}
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          playing
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPopUp;
