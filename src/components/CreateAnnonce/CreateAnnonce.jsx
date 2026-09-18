import { NavLink } from "react-router";
import style from './CreateAnnonce.module.scss'

export function CreateAnnonce() {

    return(
        <section className={style.sectionStyle}>
            <h2>Opret en annonce og fin frivillige til din forening</h2>
            <p>Gratissimo er gratis for alle. Frivillige, organisationer og foreninger. Du skaber det frivillige liv og vi formidler kontakten. Når du har fundet en frivillig til din forening, kan du blot fjerne annoncen igen ved at gå til din side.</p>
            <NavLink to={'/minside'}>Gå til min side</NavLink>
        </section>
    )
}