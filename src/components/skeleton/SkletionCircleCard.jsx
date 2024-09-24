
import React from 'react';

const SkeletonCircleCard = () => {
  return (
    <div className="w-[300px] flex justify-center items-center flex-col my-6 animate-pulse">
      <div className="w-[200px] h-[200px] rounded-full bg-gray-700 mb-4"></div>
      <div className="h-6 bg-gray-700 rounded w-[70%] mb-2"></div>
      <div className="h-6 bg-gray-700 rounded w-[50%]"></div>
    </div>
  );
};

export default SkeletonCircleCard;
