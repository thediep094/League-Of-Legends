import React from 'react'
import { ChampionAll } from '../../components/championAll/ChampionAll'
import Highlights from '../../components/hightlights/Highlights'
import Navbar from '../../components/navbar/Navbar'
import SearchChampion from '../../components/searchChampion/SearchChampion'
import Footer from '../../components/footer/Footer'
import { useLocation } from 'react-router-dom'
import { role } from '../../data/role'
const Champions = () => {
  const location = useLocation()
  console.log(location.state)
  return (
    <div className="champions">
      <Navbar />
      <Highlights />
      <SearchChampion />
      <ChampionAll role={location.state ? location.state.role : "ALL"} />
      <Footer />
    </div>
  )
}

export default Champions