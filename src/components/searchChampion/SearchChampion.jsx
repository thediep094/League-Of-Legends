import './searchChampion.scss'
import { ArrowDropDown, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { role } from '../../data/role'
import { useState } from 'react'
const SearchChampion = () => {
    const [isChoose, setIsChoose] = useState(0)
    const [isChooseRole, setIsChooseRole] = useState("ALL ROLE")
    const [isClickChooseRole, setIsClickChooseRole] = useState(false)
    const handleChoose = (index) => {
        setIsChoose(index)
    }
    const handleChooseRole = (index) => {
        setIsChooseRole(index)
        setIsClickChooseRole(false)
    }
    return (
        <div className="searchChampion">
            <div className="searchChampion__container">
                <div className="icons">
                    <Search className='icon' />
                    <input type="text" placeholder='Search' className='search' />
                </div>

                <div className="role">
                    {
                        role.map((item, index) => {
                            return (
                                <Link to="/champions"

                                    key={index}
                                    className={isChoose === index ? 'role__item role__item--active' : 'role__item'}
                                    onClick={() => handleChoose(index, item.role)}
                                    state={{ role: item.role }}
                                >
                                    <p>{item.role.toUpperCase()}</p>
                                </Link>
                            )
                        })
                    }
                    <div className="allRole">
                        <span
                            onClick={() => setIsClickChooseRole(true)}
                        >{isChooseRole}</span>
                        <ArrowDropDown className='btn__AllRole' />
                        <div className="allRole__info"
                            style={
                                isClickChooseRole ? { display: 'flex' } : { display: 'none' }
                            }
                        >
                            {
                                role.map((item, index) => {
                                    return (
                                        <Link to="/champions"
                                            key={index}
                                            className={"allRole__item"}
                                            onClick={() => handleChooseRole(item.role.toUpperCase())}
                                            state={{ role: `${item.role}` }}
                                        >
                                            <p>{item.role.toUpperCase()}</p>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="difficulties">
                    <span>ALL DIFFICULTIES</span>
                    <ArrowDropDown className='btn__difficulties' />
                </div>
            </div>
        </div>
    )
}

export default SearchChampion