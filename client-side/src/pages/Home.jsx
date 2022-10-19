import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slidder from '../components/Slidder'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Announcement/>
        <Navbar />
        <Slidder />
        <Categories/>
        <Products />
        <NewsLetter/>
        <Footer />
    </div>
  )
}

export default Home