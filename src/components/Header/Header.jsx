import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.svg"
import ContentWrapper from '../contentWrapper/ContentWrapper';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='sticky top-0 z-40'>
        <div className="w-full p-4 bg-[#04152D] bg-opacity-70 text-white ">
          <div className="w-4/5 flex justify-between items-center m-auto">
          
            <NavLink to="/">
              <div className='logo hover:cursor-pointer'>
                <img src={logo} alt='movie Logo' />
              </div>
            </NavLink>
            <div className='hidden md:flex right'>
              <NavLink to="/movies">
              <button className='mr-4  text-xl pl-4 pr-4 pt-2 pb-2 rounded hover:text-red-900 hover:cursor-pointer '>
                  Movie
                </button>
              </NavLink>
              <NavLink to="/tvShows">
                <button className='mr-4  text-xl pl-4 pr-4 pt-2 pb-2 rounded hover:text-red-900 hover:cursor-pointer '>
                  Tv Shows
                </button>
              </NavLink>
              {/* Adding buttons here */}
              {/* <button className='block w-full text-center text-xl rounded hover:text-red-900 hover:cursor-pointer mt-3'>
                   🔎
                </button> */}
            </div>
            <div className='md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className=" inline-flex items-center justify-center  rounded-md text-white hover:text-white hover:bg-slate-600 focus:outline-none focus:bg-slate-600"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
           
            </div>
          </div>
      
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-800 opacity-90 text-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink to="/movies" onClick={() => setIsOpen(false)}>
                <button className='block w-full text-center text-xl rounded hover:text-red-900 hover:cursor-pointer '>
                  Movie
                </button>
              </NavLink>
              <NavLink to="/tvShows" onClick={() => setIsOpen(false)}>
              <button className='block w-full text-center text-xl rounded hover:text-red-900 hover:cursor-pointer mt-3'>
                  Tv Shows
                </button>
              </NavLink>
              <NavLink to= "/" onClick={() => setIsOpen(false)} >
                   <button className='block w-full text-center text-xl rounded hover:text-red-900 hover:cursor-pointer mt-3'>
                  Search bar
                </button>
              </NavLink>
               
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
