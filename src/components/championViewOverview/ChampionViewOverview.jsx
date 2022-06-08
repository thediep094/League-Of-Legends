import './championViewOverview.scss'
import { championAll } from '../../data/championAll'
const ChampionViewOverview = ({ index }) => {

  return (
    <div className="championViewOverview">
      <div className="tag">
        <span>OVERVIEW</span>
      </div>
      <div className="championViewOverview__all">
        <div className="championViewOverview__background">
          <img src={championAll[index].splash} alt="" />
          <div className="championViewOverview__background__overlay"></div>
        </div>


        <div className="championViewOverview__info">

          <div className="championViewOverview__info__img">
            <img src={championAll[index].splash} alt="" />
          </div>


          <div className="championViewOverview__info__info">


            <div className="championViewOverview__info__name">
              <span>{championAll[index].title}</span>
              <h1>{championAll[index].name}</h1>
            </div>

            <div className="champtionViewOverview__info__description">


              <div className="championViewOverview__info__description__left">
                <div className="champtionViewOverview__info__description__role">
                  <img src={process.env.PUBLIC_URL + "/Logo/adc.png"} alt="" />
                  <span>ROLE</span>
                  <p>{championAll[index].tags[0]}</p>
                </div>
                <div className="champtionViewOverview__info__description__difficulty">
                  <h1>NORMAL</h1>
                  <span>DIFFICULTY</span>
                  <p>MORDERATE</p>
                </div>
              </div>

              <div className="championViewOverview__info__description__right">
                <div className="champtionViewOverview__info__description__title">
                  <p>{championAll[index].description}</p>
                </div>
              </div>
            </div>

            <div className="championViewOverview__info__footer">
              <div className="championViewOverview__info__footer__tag">
                <p>CHAMPION MASTERY</p>
                <a href="#">U.GG</a>
                <a href="#">OP.GG</a>
                <a href="#">PROBUILD.NET</a>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

export default ChampionViewOverview