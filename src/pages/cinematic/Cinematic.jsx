import CinematicVid from '../../components/cinematicVid/CinematicVid'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import './cinematic.scss'

const Cinematic = () => {
  return (
    <div className="cinematic">
        <Navbar />
        <CinematicVid />
        <Footer />
    </div>
  )
}

export default Cinematic