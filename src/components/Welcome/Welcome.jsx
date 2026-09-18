import { NavLink } from "react-router";
import { useAuth } from "../../provider/auth.provider";
import style from './Welcome.module.scss'

export function Welcome() {
    const {loginData} = useAuth()
    
    if (!loginData) {
        return null
    
    }
    return (
        <section className={style.sectionStyle}>
            <div>
            <h2>Velkommen {loginData.user.firstname}</h2>
            <p>Rediger eller slet dine annoncer. Du kan også danne dig et overbliv over de annoncer du har gemt som farvorit, samt fjerne dem igen.</p>
            </div>
            <div className={style.linkStyle}>
            <NavLink>Log ud</NavLink>
            <NavLink to='/rediger'>Rediger Profil</NavLink>
            </div>
        </section>
    )
}
