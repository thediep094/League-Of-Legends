import { ArrowBackOutlined, ArrowForwardOutlined } from '@material-ui/icons'
import './gameplay1.scss'
import {gameplay} from '../../data/gameplay'
import { useEffect, useState } from 'react'
import Aos from 'aos'

const Gameplay1 = () => {
    const [current, setCurrent] = useState(0)
    useEffect(() => {
        Aos.init({ duration: 2000 })
      }
        , [])
  return (
    <div className="gameplay"
    style={{ backgroundImage: "url(/BG/bg2.png)" }}>
        {gameplay.map((item, index) => {
            const info = item.info
            return (
            <div className="gameplay__container" key={index}
            data-aos="zoom-in-right"
            >
            
            
            <div className="goal">
                <div className="about">{item.about}</div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                {
                    info.map((item, index) => {
                        return(
                            <div className={current === index ? "info active" : "info"} key={index}>
                                <div className="info__title">{item.title}</div>
                                <div className="info__content">{item.description}</div>
                                <div className="icon">
                                    <ArrowBackOutlined className="left" 
                                    onClick = { ()=>{
                                        if(current !== 0 ){
                                            setCurrent(current-1)
                                        }
                                        else{
                                            setCurrent(info.length-1)
                                        }
                                    }}
                                    />
                                    <ArrowForwardOutlined className="right"
                                    onClick = {() => {
                                        if(current !== info.length-1){
                                            setCurrent(current+1)
                                        }
                                        else{
                                            setCurrent(0)
                                        }
                                    }}
                                    />
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
            </div>
            )
            
        })}
    </div>
  )
}

export default Gameplay1