import { NavLink } from "react-router"
import style from './Signup.module.scss'

export function Signup() {

    return (
        <section>
            <form className={style.formStyle} action="">
                <h2>Opret ny profil</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Skriv din email..." required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Skriv dit password..." required/>
                </div>
                <div>
                    <label htmlFor="passwordCheck">Password</label>
                    <input id="passwordCheck" type="password" placeholder="Skriv dit password" required/>
                </div>
                <div>
                    <label htmlFor="name">Fornavn</label>
                    <input id=""name type="text" placeholder="Skriv dit fornavn..." required/>
                </div>
                <div>
                    <label htmlFor="lastName">Efternavn</label>
                    <input id="lastName" type="text" placeholder="Skriv dit efternavn..." required/>
                </div>
                <div>
                    <label htmlFor="number">Telefonnummer</label>
                    <input id="number" type="number" placeholder="skriv dit telefon nummer..." required/>
                </div>
                <button>Opret profil</button>
                <NavLink to={'/login'}>Log in</NavLink>
            </form>
        </section>
    )
}