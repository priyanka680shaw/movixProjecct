import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { SlSocialTwitter } from 'react-icons/sl';

const Footer = () => {
  return (
    <>
      <footer>
        <div className='w-full flex justify-center items-center p-4 bg-gray-800 text-white'>
          <div className='w-full max-w-6xl flex flex-col justify-center items-center p-4'>
            {/* Links Section */}
            <div className='w-full flex justify-center items-center p-4'>
              <ul className='flex flex-wrap justify-center items-center p-4 gap-4 text-center'>
                <li className='text-lg hover:text-red-600 cursor-pointer'>Terms Of Use</li>
                <li className='text-lg hover:text-red-600 cursor-pointer'>Privacy Policy</li>
                <li className='text-lg hover:text-red-600 cursor-pointer'>About</li>
                <li className='text-lg hover:text-red-600 cursor-pointer'>Blog</li>
                <li className='text-lg hover:text-red-600 cursor-pointer'>FAQ</li>
              </ul>
            </div>
            {/* Description Section */}
            <p className='text-center text-lg p-4 max-w-4xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            {/* Social Media Icons Section */}
            <div className='w-full flex justify-center items-center p-4'>
              <ul className='flex justify-center items-center gap-4'>
                <li className='text-3xl hover:text-red-900 cursor-pointer hover:bg-red-300 rounded-full w-12 h-12 flex justify-center items-center transition-all duration-200'><FaFacebook /></li>
                <li className='text-3xl hover:text-red-900 cursor-pointer hover:bg-red-300 rounded-full w-12 h-12 flex justify-center items-center transition-all duration-200'><GrInstagram /></li>
                <li className='text-3xl hover:text-red-900 cursor-pointer hover:bg-red-300 rounded-full w-12 h-12 flex justify-center items-center transition-all duration-200'><SlSocialTwitter /></li>
                <li className='text-3xl hover:text-red-900 cursor-pointer hover:bg-red-300 rounded-full w-12 h-12 flex justify-center items-center transition-all duration-200'><FaLinkedin /></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
