import React from 'react'
import { Tooltip } from "@material-tailwind/react";
import { NewsLinks } from '../Data'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <React.Fragment>
      <div className="relative isolate w-full h-16 mb-2 border-2">
        <div className=" bg-green-100 flex items-center justify-center">
          <ul className=' p-4 inline-flex '>
              {
                  NewsLinks.map( (link, index) => {
                      return (
                          <li key={index} className='m-2 mx-10 sm:mx-6'>
                              <Link to={link.href} className='text-lg font-medium'>
                                <Tooltip content={link.name} className="bg-pink-400 p-1 z-40 text-gray-900 font-medium px-2">
                                <span className='sm:hidden'>{link.icon}</span>
                                </Tooltip>
                                <span className='max-sm:hidden hover:underline'>{link.name}</span>
                                  
                              </Link>
                          </li>
                      )
                  })
              }
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SideBar
