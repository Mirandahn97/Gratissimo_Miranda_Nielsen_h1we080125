import style from './Logo.module.scss'
import logo_white from '../../assets/logo_white.png'

export function Logo() {

    return(
    <div className={style.logoStyle} >
    <img src={logo_white} alt="" />
    </div>
    )
}