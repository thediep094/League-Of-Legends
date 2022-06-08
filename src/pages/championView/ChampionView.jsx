import Abilities from '../../components/abilities/Abilities'
import ChampionViewOverview from '../../components/championViewOverview/ChampionViewOverview'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './championView.scss'
import { useLocation } from 'react-router-dom';
import Skin from '../../components/skin/Skin'
import { useEffect, useState } from 'react'
import { championAll } from '../../data/championAll'
import { dataChampion } from '../../data/dataChampion'
const ChampionView = () => {
  const location = useLocation()
  const champion1 = championAll[location.state.index].id
  const champion = champion1.charAt(0).toUpperCase() + champion1.slice(1)
  const [championData, setChampionData] = useState(dataChampion)
  const championUrl = `https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion/${champion}.json`
  useEffect(() => {
    fetch(championUrl)
      .then(response => response.json())
      .then((data) => {
        setChampionData(data.data[champion])

      })
  }, []);
  console.log(championData)
  return (
    <div className="championView">
      <Navbar />
      <ChampionViewOverview index={location.state.index} championData={championData} />
      <Abilities index={location.state.index} championData={championData} />
      <Skin index={location.state.index} championData={championData} />
      <Footer />
    </div>
  )
}

export default ChampionView