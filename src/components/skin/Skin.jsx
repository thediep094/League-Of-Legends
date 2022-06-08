import './skin.scss'
import { championAll } from '../../data/championAll'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
const Skin = ({ index, championData }) => {
  const location = useLocation()
  const [skin, setSkin] = useState(0)

  return (
    <div className="skin">
      <div className="tag">AVAILABLE SKINS</div>
      <div className="skin__title">AVAILABLE SKINS</div>
      <div className="skin__container">
        <TransitionGroup>
          <CSSTransition classNames="fade" key={skin} timeout={1000}>
            <div className="skin__container__image">
              <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_${championData.skins[skin].num}.jpg`} alt="skin" />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="skin__btn">
        <ChevronLeft className='left' onClick={() => {
          if (skin === 0) {
            setSkin(championData.skins.length - 1)
          } else {
            setSkin(skin - 1)
          }
        }} />
        <ChevronRight className='right' onClick={() => {
          if (skin === championData.skins.length - 1) {
            setSkin(0)
          } else {
            setSkin(skin + 1)
          }
        }} />
      </div>
    </div>
  )
}

export default Skin