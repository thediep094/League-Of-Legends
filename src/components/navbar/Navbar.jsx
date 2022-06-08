import { Link } from 'react-router-dom'
import './navbar.scss'
import { Close, Language, LibraryMusic, Menu, SkipNext, SkipPrevious } from '@material-ui/icons'
import { useState } from 'react';
import { music } from '../../data/music'
const Navbar = () => {
    const [currentSong, setCurrentSong] = useState(0)
    const [isMusic, setIsMusic] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    const handleMusic = () => {
        setIsMusic(!isMusic)
    }

    return (
        <div className="navbar">
            <div className="navbar__left">
                <div className="navbar__left--logo">
                    <img src={process.env.PUBLIC_URL + '/Logo/logo1.svg'} alt="" />
                </div>
                <Link to="/" className='navbar__left--btn'>How To Play</Link>
                <Link to="/champions" className='navbar__left--btn'>Champions</Link>
                <Link to="/news" className='navbar__left--btn'>News</Link>
                <Link to="/cinematic" className='navbar__left--btn'>Cinematic</Link>
                <Link to="/myprofile" className='navbar__left--btn'>About Me</Link>
            </div>

            <div className="navbar__right">
                <LibraryMusic className='music__menu' onClick={() => {
                    handleMusic()
                }} />
                {
                    isMusic && (
                        <div className="music__controls">
                            <SkipPrevious className='music__icon' onClick={() => {
                                setCurrentSong(currentSong === 0 ? music.length - 1 : currentSong - 1)
                            }} />
                            <audio src={music[currentSong].url} controls autoPlay></audio>
                            <SkipNext className='music__icon' onClick={() => {
                                setCurrentSong(currentSong === music.length - 1 ? 0 : currentSong + 1)
                            }} />
                        </div>
                    )
                }
                <Link to="/signin" className='navbar__right--btn signin'> Sign In</Link>
                <Link to="/" className='navbar__right--btn play'> Play Now</Link>
                <Menu className='menu' onClick={handleOpen} />
                {open && (
                    <div
                        className="menu__open"
                    >
                        <div className="menu__open--header">
                            <img src={process.env.PUBLIC_URL + '/Logo/lol-logo-rendered-hi-res.png'} alt="" />
                            <Close onClick={handleOpen} className='close' />
                        </div>
                        <div className='menu__open--container'>
                            <Link to="/" className='navbar__right--btnew'>How To Play</Link>
                            <Link to="/champions" className='navbar__right--btnew'>Champions</Link>
                            <Link to="/news" className='navbar__right--btnew'>News</Link>
                            <Link to="/cinematic" className='navbar__right--btnew'>Cinematic</Link>
                            <Link to="/myprofile" className='navbar__right--btnew'>About Me</Link>
                        </div>

                        <div className="menu__open--footer">
                            <Link to="/signin" className='navbar__right--btnew signin'> Sign In</Link>
                            <Link to="/" className='navbar__right--btnew play'> Play Now</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar