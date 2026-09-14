import { useAuth } from '../../provider/auth.provider'
import { NavLink } from "react-router"
import style from './Nav.module.scss'
import { Login } from '../Login/Login'

export function Nav() {

    const { loginData, logout } = useAuth()

    return (
        <nav className={style.navStyle}>
            <ul>
                <li>
                    <NavLink to={'/'}>Alle Jobs</NavLink>
                </li>
                <li>
                    <NavLink to={'/annoncer'}>Opret annonce</NavLink>
                </li>
                <li>
                    <NavLink to={'/nyheder'}>Nyheder</NavLink>
                </li>
                {!loginData ?
                    <>
                        <li>
                            <NavLink>Opret Profil</NavLink>
                        </li>
                        <li>
                            <NavLink to= '/login'>Log ind</NavLink>
                        </li>
                    </>
                    : <>
                        <li>
                            <NavLink>Min side</NavLink>
                        </li>
                        <li>
                            <NavLink>Log ud</NavLink>
                        </li>
                    </>
                }
            </ul>
        </nav>
    )
}