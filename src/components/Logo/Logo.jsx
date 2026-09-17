import style from './Logo.module.scss'
import logo_white from '../../assets/logo_white.png'
import { useNavigate } from 'react-router'

export function Logo() {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
    }
    return(
    <div className={style.logoStyle} >
    <img onClick={handleClick} src={logo_white} alt="" />
    </div>
    )
}