import { Apple, ArrowForward, Facebook,GitHub,Google } from '@material-ui/icons'
import { useState } from 'react'
import './signIn.scss'
import {Link} from 'react-router-dom'
const SignIn = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

  return (
    <div className="signIn"
    style={{
        backgroundImage: `url(https://lolstatic-a.akamaihd.net/rso-login-page/3.2.12/assets/lol_desktop_background_2x.jpg)`,
    }}
    >
        <div className="signIn__logo">
            <img src="/Logo/logo1.svg" alt=""/>
        </div>
        <div className="sigIn__form">
            <form action="">
                <h1>LOGIN</h1>
                <div className="signIn__form__input">
                    <input type="text" placeholder="Username" onChange={(e)=>{
                        setUser({
                            ...user,
                            [e.target.email]: e.target.value
                        })
                    }}/>
                    <input type="password" placeholder="Password" onChange={(e)=>{
                        setUser({
                            ...user,
                            [e.target.password]: e.target.value
                        })
                    }}/>
                </div>
            </form>
            <div className="signIn__form__button">
                <Facebook style={{
                    backgroundColor: '#1877f2',
                    color: 'white',
                }}/>
                <GitHub id="github"
                style={{
                    backgroundColor: '#36e63f',
                    color: 'white',
                }}
                />
                <Apple id="apple"
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                }}
                />
            </div>
            <div className="signIn__login">
                <ArrowForward />
            </div>
            <div className="signIn__text">
                <Link to="/">Back to Homepage</Link>
                <a href="#">Create an account</a>
            </div>
        </div>
    </div>
  )
}

export default SignIn