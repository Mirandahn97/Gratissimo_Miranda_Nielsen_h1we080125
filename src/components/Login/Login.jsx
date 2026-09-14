import { NavLink } from "react-router"
import { useAuth } from "../../provider/auth.provider"
import style from './Login.module.scss'

export function Login() {

    const { setLoginData } = useAuth()

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
                 data => setLoginData(data)
            )

    }
    return (
        <form onSubmit={handleSubmit} className={style.formStyle}>
            <h2>Log ind</h2>
            <p>Email</p>
            <input type="email" placeholder="Skriv din email..." name="username" />
            <p>Password</p>
            <input type="password" placeholder="Skriv dit password..." name="password" />
            <button type="submit">Login</button>
            <NavLink to={'/opret'}>Opret bruger</NavLink>
        </form>
    )
}