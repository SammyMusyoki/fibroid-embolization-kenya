import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar'

const NewsLayout = () => {
  return (
    <React.Fragment>
            <TopBar />
            <Outlet />
    </React.Fragment>
  )
}

export default NewsLayout
