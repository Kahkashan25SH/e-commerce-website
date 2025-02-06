import React from 'react'
import HeroSection from './components/HeroSection'
import SecondSection from './components/SecondSection'
import TopSection from './components/TopSection';
import NewArrivl from './components/NewArrivl';
import Blog from './components/Blog';
import Insta from './components/Insta';


const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SecondSection/>
      <TopSection/>
      <NewArrivl/>
      <Blog/>
      <Insta/>
      
    </div>
  )
}

export default Home


