import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Sidebar from '../../component/sidebar/Sidebar'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
    <Sidebar/>
    <div className="homeContainer">content</div>
    <Navbar/>
    </div>
  )
}

export default Home