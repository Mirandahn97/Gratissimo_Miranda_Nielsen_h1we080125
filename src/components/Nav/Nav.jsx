import { useAuth } from '../../provider/auth.provider'
import { NavLink, useNavigate } from "react-router"
import style from './Nav.module.scss'


export function Nav() {

    const { loginData, logout } = useAuth()

    const navigate = useNavigate()

    const hadleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <nav className={style.navStyle}>
            <ul>
                <li>
                    <NavLink to={'/allejobs'}>Alle Jobs</NavLink>
                </li>
                <li>
                    <NavLink to={'/annoncer'}>Opret annonce</NavLink>
                </li>
                <li>
                    <NavLink to={'/nyheder'}>Nyheder</NavLink>
                </li>
                {!loginData ?
                    <div>
                        <li>
                            <NavLink to={'/opret'}>Opret Profil</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>Log ind</NavLink>
                        </li>
                    </div>
                    :
                     <div>
                        <li>
                            <NavLink to='/minside'>Min side</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={hadleLogout}>Log ud</NavLink>
                        </li>
                    </div>
                }
            </ul>
        </nav>
    )
}