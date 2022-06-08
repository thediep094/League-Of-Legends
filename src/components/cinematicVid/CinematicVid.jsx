import './cinematicVid.scss'
import { cinematic } from '../../data/cinematic'
import { useState } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
const CinematicVid = () => {
    const [currentCinematic,setCurrentCinematic] = useState(0)
    useEffect(() => {
        Aos.init({ duration: 1000 })
      }
        , [])
  return (
    <div className="cinematicVid" data-aos="fade-right">
        <div className="cinematicVid__background">
            <h1>{cinematic[currentCinematic].name}</h1>
            <div className="cinematicVid__background__overlay"></div>
            <img src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt686035e751b05708/61d8fb621757dc6aed2adafc/SS22_TheCall_thumbnail_v2.jpg" alt="" />
            <div className="cinematicVid__video__main">
                <video className="cinematicVid__video__main__main" autoPlay muted loop controls
                src={cinematic[currentCinematic].url}
                />
            </div>
            
        </div>
        <div className="cinematicVid__scroll">
                {
                    cinematic.map((item, index) => {
                        return (
                            <div key={index} className="cinematicVid__scroll__item" onClick={()=>{
                                setCurrentCinematic(index)
                            }}>
                                <img src={item.img} alt="" />
                            </div>
                        )
                    })
                }
            </div>

    </div>
  )
}

export default CinematicVid