import { NavLink } from "react-router"
import style from './Signup.module.scss'
import { useNavigate } from "react-router";

export function Signup() {

    const navigate = useNavigate()

     function handleSubmit(e) {

        e.preventDefault();

        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())

        delete formJson.passwordCheck

        console.log(formJson)
        const bodyData = JSON.stringify(formJson)

        fetch('http://localhost:4000/api/users', {
            method: 'POST', body: bodyData, headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(res => {
                
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.error?.includes('Unique constraint failed on the fields: (`email`)')){
                    window.alert('Email allerede oprettet')
                } else if(data.error) {
                    window.alert('Der er sket en fejl')
                } else {
                window.alert('Du er nu oprettet')
                navigate('/login')
                }
            })

    }

    return (
        <section>
            <form onSubmit={handleSubmit} className={style.formStyle} action="">
                <h2>Opret ny profil</h2>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" type="email" placeholder="Skriv din email..." required/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" type="password" placeholder="Skriv dit password..." required/>
                </div>
                <div>
                    <label htmlFor="passwordCheck">Password</label>
                    <input name="passwordCheck" id="passwordCheck" type="password" placeholder="Skriv dit password" required/>
                </div>
                <div>
                    <label htmlFor="firstname">Fornavn</label>
                    <input name="firstname" id="firstname" type="text" placeholder="Skriv dit fornavn..." required/>
                </div>
                <div>
                    <label htmlFor="lastname">Efternavn</label>
                    <input name="lastname" id="lastname" type="text" placeholder="Skriv dit efternavn..." required/>
                </div>
                <div>
                    <label htmlFor="phone">Telefonnummer</label>
                    <input name="phone" id="phone" type="number" placeholder="skriv dit telefon nummer..." required/>
                </div>
                <div>
                    <label htmlFor="address">Adresse</label>
                    <input name="address" id="address" type="text" placeholder="skriv dit telefon nummer..." required/>
                </div>
                <div>
                    <label htmlFor="city">By</label>
                    <input name="city" id="city" type="text" placeholder="skriv dit telefon nummer..." required/>
                </div>
                <div>
                    <label htmlFor="zipcode">Postnummer</label>
                    <input name="zipcode" id="zipcode" type="number" placeholder="skriv dit telefon nummer..." required/>
                </div>
                <button>Opret profil</button>
                <NavLink to={'/login'}>Log in</NavLink>
            </form>
        </section>
    )
}