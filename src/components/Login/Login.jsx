import { NavLink, useNavigate } from "react-router"
import { useAuth } from "../../provider/auth.provider"
import style from './Login.module.scss'

export function Login() {

    const { setLoginData } = useAuth()
    const navigate = useNavigate()

    function handleSubmit(e) {

        e.preventDefault();

        const form = e.target
        const username = form.username.value
        const password = form.password.value

        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson);
        const bodyData = JSON.stringify(formJson)

        fetch('http://localhost:4000/api/login', {
            method: 'POST', body: bodyData, headers: {
                "Content-Type": 'application/json'
            }
        })
            .then(
                res => res.json()
            ).then(
                data => setLoginData(data),
                window.alert('Du er nu logget ind'),
                navigate('/minside')
            )

    }
    return (
        <form onSubmit={handleSubmit} className={style.formStyle}>
            <h2>Log ind</h2>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' type="email" placeholder="Skriv din email..." name="username" required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Skriv dit password..." name="password" required/>
            </div>
            <button type="submit">Login</button>
            <NavLink to={'/opret'}>Opret bruger</NavLink>
        </form>
    )
}