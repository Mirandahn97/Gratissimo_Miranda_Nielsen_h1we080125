import { NavLink } from "react-router";
import style from './Welcome.module.scss'

export function Welcome() {

    return (
        <section className={style.sectionStyle}>
            <div>
            <h2>Velkomme</h2>
            <p>Rediger eller slet dine annoncer. Du kan også danne dig et overbliv over de annoncer du har gemt som farvorit, samt fjerne dem igen.</p>
            </div>
            <div className={style.linkStyle}>
            <NavLink>Log ud</NavLink>
            <NavLink>Rediger Profil</NavLink>
            </div>
        </section>
    )
}