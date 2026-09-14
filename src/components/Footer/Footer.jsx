import { NavLink } from 'react-router'
import style from './Footer.module.scss'
import LinkedIn from '../../assets/LinkedIn.png'
import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import Google from '../../assets/Google.png'

export function Footer() {

    return (
        <footer className={style.footerStyle}>
            <div>
                <h3>For jobsøgende</h3>
                <NavLink>Din kundeside</NavLink>
                <NavLink>Opret profil</NavLink>
                <NavLink>Gemte jobs</NavLink>
            </div>
            <div>
                <h3>For arbejdsgiver</h3>
                <NavLink>virksomhedsprofil</NavLink>
                <NavLink>Opret annonce</NavLink>
                <NavLink>Jobanoncering</NavLink>
                <NavLink>Rekuttering</NavLink>
            </div>
            <div>
                <h3>Links</h3>
                <NavLink>Om Gratissimo</NavLink>
                <NavLink>Job hos os</NavLink>
                <NavLink>For investorer</NavLink>
                <NavLink>Presse</NavLink>
            </div>
            <div>
                <h3>Vil du have jobs direkte i din indbakke?</h3>
                <p>tilmeld dig vores elektroniske nyhedsbrev</p>
                <form action="">
                <input type="email" placeholder='@ intast email...' />
                <button>Tilmeld</button>
                </form>
            </div>
            <div>
                <p>Fidusvej 23</p>
                <p>9230 Oster Lundby</p>
                <p>+45 22 13 22 13</p>
                <div className={style.imgStyle}>
                    <img src={LinkedIn} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Google} alt="" />
                </div>
            </div>
        </footer>
    )
}