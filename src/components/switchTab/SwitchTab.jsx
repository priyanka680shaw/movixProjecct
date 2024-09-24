import React, { useState } from 'react';

const  SwitchTab = ({ data, setEndPoint }) => {
  const [isOn, setIsOn] = useState(true);
  // console.log(data)
  const apiCallBasedOn = (value) => {
    if (value === 'Days') return 'day';
    if (value === 'Week') return 'week';
    if (value === 'Movies') return 'movie';
    if (value === 'Tv Shows') return 'tv';
  };

  return (
    <>
      <div className='slideButton relative px-2 py-1 sm:px-4 sm:py-2 border-white bg-white flex justify-around w-[150px] sm:w-[200px] md:w-[250px] rounded-full font-bold'>
        <div
          onClick={() => {
            setIsOn(true);
            const val = apiCallBasedOn(data[0]);
            console.log("vlue" ,val)
            setEndPoint(val);
          }}
          className='z-10 cursor-pointer text-xs sm:text-sm md:text-base'
        >
          {data[0]}
        </div>

        <div
          onClick={() => {
            setIsOn(false);
            const val = apiCallBasedOn(data[1]);
            setEndPoint(val);
          }}
          className='z-10 cursor-pointer text-xs sm:text-sm md:text-base'
        >
          {data[1]}
        </div>

        {/* Slider */}
        <div
          className={`slider absolute top-0 bottom-0 left-0 h-[30px] sm:h-[40px] bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full transform transition-transform duration-300 ease-in-out ${
            isOn ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            width: isOn ? '50%' : '50%',
          }}
        ></div>
      </div>
    </>
  );
};

export default SwitchTab;
