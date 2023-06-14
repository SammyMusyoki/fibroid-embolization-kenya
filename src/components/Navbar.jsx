import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { BiDonateHeart } from "react-icons/bi";
import { NavLinks } from '../Data';
import Flag from '../images/flag.jpg'
import Logo from '../images/logo.png'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter, FaWhatsappSquare } from 'react-icons/fa';

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false)

  const handleClose = () => {
    setIsShowing((prev) => !prev)
  }
  return (
    <React.Fragment>
      <header className="relative inset-x-0 top-0 z-40 bg-green-50 shadow-2xl">
        <div className="hidden shadow-md lg:flex flex-1 items-center justify-end border-green-200">
          <div className="hidden md:flex mt-4 space-x-6 sm:justify-center sm:mt-0 mr-16">
            <Link to="#" className="text-green-500  hover:text-blue-600">
              <span className="sr-only">Facebook Page</span>
              <FaFacebook className="h-6 w-6" fill="currentColor" />
            </Link>
            <Link to="#" className="text-green-500 hover:text-sky-500">
              <span className="sr-only">Twitter Page</span>
              <FaTwitter className="h-6 w-6" fill="currentColor" />
            </Link>
            <Link to="#" className="text-green-500  hover:text-red-500">
              <span className="sr-only">Instagram Page</span>
              <FaInstagramSquare className="h-6 w-6" fill="currentColor" />
            </Link>
            <Link to="#" className="text-green-500 hover:text-blue-700">
              <span className="sr-only">LinkedIn Page</span>
              <FaLinkedin className="h-6 w-6" fill="currentColor" />
            </Link>
            <Link to="#" className="text-green-500 hover:text-green-600">
              <span className="sr-only">WhatsApp Page</span>
              <FaWhatsappSquare className="h-6 w-6" fill="currentColor" />
            </Link>
          </div>
          <img
            src={Flag}
            alt="Kenya"
            className="h-8 w-8 mr-2 rounded-full my-2"
          />
          <span className="mr-8 font-semibold">Kenya</span>
        </div>
        <nav
          className="flex items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 items-center">
            <img src={Logo} alt="Fibroid-embolization-foundation-kenya" className='w-24 h-24'/>
            <Link to="/" className="-m-2 p-1.5">
              <span className="sr-only">
                Fibroid Embolisation Foundation - Kenya
              </span>
              <div className="text-md md:text-xl font-medium font-serif text-black flex flex-col">
                <p>
                  Fibroid & Fibroid Embolization, Kenya
                </p>
                <span className="text-xs sm:text-sm text-pink-600 italic">Save the Woman, Save Mankind</span>
              </div>
            </Link>
          </div>

          {/* Toggle Bars */}
          <div className="flex lg:hidden">
            {isShowing ? (
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center p-2.5 cursor-pointer text-gray-700 font-bold text-semibold px-2 py-2 mr-2 "
                onClick={handleClose}
              >
                <XMarkIcon
                  className="h-10 w-10 text-green-500 cursor-pointer"
                  aria-hidden="true"
                />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleClose}
                className="-m-2.5 inline-flex items-center justify-center p-2.5 cursor-pointer text-gray-700 font-bold text-semibold px-2 py-2 mr-2  "
              >
                <Bars3BottomRightIcon
                  className="h-10 w-10 text-green-500 cursor-pointer"
                  aria-hidden="true"
                />
              </button>
            )}
          </div>

          {/* Navigation Menu */}

          {/* Donation Button */}
          <div className="hidden lg:flex lg:justify-end mr-6 lg:gap-x-8">
            {/* <div className=" lg:flex lg:gap-x-8 mr-6"> */}
            {NavLinks.map((nav, index) => {
              return (
                <Link
                  key={index}
                  to={nav.href}
                  className="group hover hover:border-b-2 border-green-500 hover:text-green-500 hover:px-0 hover:py-2 text-medium gap-x-2 leading-7 tracking-wide font-medium flex justify-center items-center"
                >
                  {nav.icon}
                  {nav.name}
                </Link>
              );
            })}
            {/* </div> */}
            <Link
              to="make-a-donation"
              className="group border-2 border-green-600 hover:border-green-500 flex justify-center items-center gap-x-2 py-2 px-8 rounded-full 
            bg-transparent hover:bg-green-500 hover:shadow-xl transition-transform ease-in-out 
            duration-700"
            >
              <BiDonateHeart className="h-6 w-6 text-pink-600 group-hover:text-pink-500" />
              <span className="text-lg font-semibold">Donate</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Navigation */}
        <div
          className={`fixed left-0 w-64 z-40 h-full p-4 overflow-y-auto transition-transform bg-gray-100 ${
            isShowing ? "translate-x-0" : "-translate-x-full"
          } ease-in-out duration-500`}
        >
          <div className="py-4">
            <ul className="space-y-4 font-medium">
              {NavLinks.map((nav, index) => {
                return (
                  <li key={index} className="flex">
                    <a
                      href={nav.href}
                      onClick={() => setIsShowing((prev) => !prev)}
                      className="flex items-center p-2"
                    >
                      <span>{nav.icon}</span>
                      <span className="ml-3">{nav.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative mt-14">
            <Link
            to='make-a-donation'
              className="group border border-green-500 hover:border-green-500 flex justify-center items-center gap-x-2 py-2 px-8 rounded-full 
            bg-transparent hover:animate-pulse hover:bg-green-500 hover:shadow-xl transition-transform ease-in-out 
            duration-700"
            >
              <BiDonateHeart className="h-6 w-6 text-green-600 group-hover:text-green-600" />
              <span className="text-lg font-semibold">Donate</span>
            </Link>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Navbar
