import { Link } from 'react-router-dom'
import './championAll.scss'
import { championAll } from '../../data/championAll'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
export const ChampionAll = ({ role }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }
        , [])
    return (
        <div className="championsAll">
            <div className="championsAll__container">
                {
                    championAll.map((champion, index) => {
                        return (
                            role === "ALL" ? (
                                <div data-aos="fade-up" className="championsAll__item" key={index}>
                                    <Link to="/championView" state={{ index: `${index}` }} className="championsAll__item__img">
                                        <img src={champion.loading} alt="" />
                                        <div className="dark__overlay">
                                            <div className="championsAll__item__name">
                                                <p>{champion.name}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ) : (
                                champion.tags.includes(role) ? (
                                    <div data-aos="fade-up" className="championsAll__item" key={index}>
                                        <Link to="/championView" state={{ index: `${index}` }} className="championsAll__item__img">
                                            <img src={champion.loading} alt="" />
                                            <div className="dark__overlay">
                                                <div className="championsAll__item__name">
                                                    <p>{champion.name}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ) : null
                            )
                        )
                    })
                }
            </div>
        </div>
    )
}
