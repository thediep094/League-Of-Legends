import './myProfile.scss'
import Navbar from '../../components/navbar/Navbar'
import { Facebook, GitHub, Instagram, YouTube } from '@material-ui/icons'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
const MyProfile = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
      }
        , [])
  return (
    <div className="myProfile">
        <Navbar />
        <div className="myProfile__container"
        style={{
            backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_18.jpg)`,
        }}
        >
            <div className="myProfile__container__left" data-aos="fade-down">
                <div className="myProfile__container__left__name">
                    <h1>DiepSkr</h1>
                </div>
                <div className="myProfile__container__left__img">
                    <img src="/Logo/iframe.png" className='iframe' alt="" />
                    <img src="/Logo/flag.png" className='flag' alt="" />
                    <img src="/Logo/avatar.jpg" className='avatar' alt="" />
                </div>
            </div>
            <div className="myProfile__container__overlay__backgound">
                
            </div>
            <div className="myProfile__container__overlay__bottom">

            </div>

            <div className="myProfile__container__right__bottom" data-aos="fade-up">
                <div className="tft">
                    <h1>TFT</h1>
                    <div className="rank__tft">PLANTINUM</div>
                    <img src="/lane/Emblem_Platinum.png" alt="" />
                </div>
                <div className="summonerift">
                    <h1>SUMMONER RIFT</h1>
                    <div className="rank__tft">GOLD</div>
                    <img src="/lane/Emblem_Gold.png" alt="" />
                </div>
                <div className="best__champion">
                        <div className="best__champion__item">
                            <h1>Caitlyn</h1>
                            <img src="/Logo/Caitlyn_13.jpg" className='champion__avatar' alt="" />
                            <img src="/Logo/tt7.png" className='mastery' alt="" />
                        </div>
                        <div className="best__champion__item1">
                            <h1>Lux</h1>
                            <img src="/Logo/Lux_14.jpg" className='champion__avatar' alt="" />
                            <img src="/Logo/tt7.png" className='mastery' alt="" />
                        </div>
                        <div className="best__champion__item">
                            <h1>Syndra</h1>
                            <img src="/Logo/Syndra_6.jpg" className='champion__avatar' alt="" />
                            <img src="/Logo/tt7.png" className='mastery' alt="" />
                        </div>
                </div>
            </div>

            <div className="myProfile__container__right__top" data-aos="fade-down">
                <div className="myProfile__container__right__top__item">
                    <h1>Name : Nguyen The Diep</h1>
                    <h2>EMAIL : thediep094@gmail.com</h2>
                    <h3>DATE OF BIRTH : 09/04/2001</h3>
                    <h4>I am a student of Posts and Telecommunications Institute of Technology. I am studying and pursuing a career in Information Technology.</h4>
                    <h5>After spending a lot of time learning to make WEB, I tried to make this website.</h5>
                    <h6>Time used to create this website is 43 hours 57 minutes.</h6>
                    <h7>This is a very dedicated website of mine and I have put a lot of effort to creating this website.</h7>
                    <h8>I hope that those who have been and will see this website of mine will be more and more successful in their studies and on the path you have chosen.</h8>
                    <h9>Hope all the great things come to you.</h9>
                    <div className="connect">
                        <h1>Connect with me:</h1>
                        <a href="https://www.facebook.com/thediep094/"><Facebook className='icon__connect'/></a>
                        <a href="https://www.instagram.com/mr.a.k.a.y/"><Instagram className='icon__connect'/></a>
                        <a href="https://github.com/thediep094"><GitHub className='icon__connect'/></a>
                        <a href="https://www.youtube.com/channel/UCsO-rTTijmoGixgir_5lqlw"><YouTube className='icon__connect'/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile