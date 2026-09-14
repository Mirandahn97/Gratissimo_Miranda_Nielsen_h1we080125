import { NavLink } from "react-router"
import style from './LoginSection.module.scss'

export function LoginSection() {

    return(
        <section className={style.sectionStyle}>
        <h2>Log in eller opret dig som bruger</h2>
        <p>Når du opretter en profil på Gratissimo får du adgang til at oprette, slette og redigere i job annoncer. Som privatperson får du mulighed for at gemme de jobs du kunne være intresseret i</p>
        <NavLink>Log ind for at gå til min side</NavLink>
        </section>
    )
}