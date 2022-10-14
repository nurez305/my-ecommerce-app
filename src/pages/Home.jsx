import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slidder from '../components/Slidder'

const Home = () => {
  return (
    <div>
      <Announcement/>
        <Navbar />
        <Slidder />
        <Categories/>
    </div>
  )
}

export default Home