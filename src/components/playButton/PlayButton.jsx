import React from 'react';
import { CgPlayButtonO } from "react-icons/cg";

const PlayButton = ({size}) => {
  return (
    <div>
      <CgPlayButtonO
        className={` text-red-700 text-[50px] hover:cursor-pointer transition-colors ease-in-out duration-300 hover:text-green-400 md:stroke-pink-50 `}
      />
    </div>
  );
};

export default PlayButton;
