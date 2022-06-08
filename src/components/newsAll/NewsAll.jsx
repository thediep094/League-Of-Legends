import './newsAll.scss'
import {newsLeft} from '../../data/newsLeft'
import {newsRight} from '../../data/newsRight'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { Facebook, Instagram, Reddit, Twitter } from '@material-ui/icons'
const NewsAll = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
      }
        , [])
  return (
    <div className="newsAll">
        <div className="newsAll__tag">
            LATEST NEWS
        </div>
        <div className="newsAll__container">
            <div className="newsAll__container__left">
                {
                    newsLeft.map((item, index) => {
                        return (
                            <div className="newsAll__container__left__item" key={newsLeft[index].id} data-aos="fade-right">
                                <div className="newsAll__container__left__item__img">
                                    <img src={newsLeft[index].img} alt="" />
                                    <div className="newsAll__container__left__item__img__border"></div>
                                </div>
                                <div className="newsAll__container__left__item__title">
                                    <p>{newsLeft[index].type}</p>
                                    <h1>{newsLeft[index].title}</h1>
                                    <span>{newsLeft[index].description}</span>
                                    <h2>{newsLeft[index].time}</h2>
                                </div>
                            </div>
                        )})
                }
            </div>

            <div className="newsAll__container__right">
                {
                    newsRight.map((item, index) => {
                        return (
                            <div className="newsAll__container__right__item" key={newsRight[index].id} data-aos="fade-left">
                                <img src={newsRight[index].img} alt="" />
                                <span>{newsRight[index].name}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="newsAll__footer">
            <span>check out our other social channels</span>
            <div className="newsAll__footer__icons">
                <Facebook  className='newsAll__footer__icon'/>
                <Twitter className='newsAll__footer__icon'/>
                <Instagram  className='newsAll__footer__icon'/>
                <Reddit  className='newsAll__footer__icon'/>
            </div>
        </div>
    </div>
  )
}

export default NewsAll