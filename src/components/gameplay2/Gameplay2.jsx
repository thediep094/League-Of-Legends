import './gameplay2.scss'
import {gameplay2} from '../../data/gameplay2'
import { useEffect, useState } from 'react'
import { Add } from '@material-ui/icons'
import Aos from 'aos'
const Gameplay2 = () => {
    const [currentIndex,setCurrentIndex] = useState(0)
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }
        , [])
  return (
    <div className="gameplay2" data-aos="fade-right">
        <div className="gameplay2__container" data-aos="fade-down-right">
            <div className="gameplay2__container__title" data-aos="fade-down-right">
                <h1>POWER UP YOUR CHAMP</h1>
                <p>Champions get stronger by earning experience to level up and gold to buy more 
                    powerful items as the game progresses. Staying on top of these two 
                    factors is crucial to overpowering the enemy team and destroying their base.</p>
            </div>
            <div className="gameplay2__container--video" data-aos="fade-down-right">
                <video data-aos="fade-down-right" src={process.env.PUBLIC_URL + '/VideoBG/poweringup.mp4'} autoPlay muted loop></video>
                <div className="gameplay2__container--video--text" >                       
                    {
                        gameplay2.map((item, index) => {
                            return (
                                <div className={index === currentIndex ? "gameplay2__container--video--info active" : "gameplay2__container--video--info"} key={index}>
                                    <div className="btn__gameplay2">
                                        <Add className='btn--add'/>
                                        <h1>{item.title}</h1>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            )
                        }
                    )
                    }
                </div>
                
                </div>

            <div className="tag">
                <span>POWERING UP</span>
            </div>
        </div>
    </div>
  )
}

export default Gameplay2