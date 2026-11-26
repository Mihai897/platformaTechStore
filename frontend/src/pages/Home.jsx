import React from 'react'
import Swipe from './home/Swipe'
import InfoSite from './home/InfoSite'
import ExploraCategorii from './home/ExploraCategorii'
import FlashDeals from './home/FlashDeals'
import Catalog from './home/Catalog'
import HomeRec from './home/HomeRec'

const Home = () => {
  return (
    <div className=' py-6'>
      <Swipe/>
      <InfoSite/>
      <ExploraCategorii/>
      <FlashDeals/>
      <Catalog/>
      <HomeRec/>
    </div>
  )
}

export default Home
