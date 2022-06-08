import React from 'react'
import './howToPlay.scss'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import Gameplay1 from '../../components/gameplay1/Gameplay1'
import Gameplay2 from '../../components/gameplay2/Gameplay2'
import Footer from '../../components/footer/Footer'
import TheChampion from '../../components/thechampion/TheChampion'

const HowToPlay = () => {

  return (
    <div className="howtoplay">
        <Navbar />
        <Featured />
        <Gameplay1 />
        <Gameplay2 />
        <TheChampion />
        <Footer />
    </div>
  )
}

export default HowToPlay