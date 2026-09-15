import style from './Button.module.scss'
import { useNavigate } from 'react-router'

export function Button() {

    const navigate = useNavigate()

    const login = () => {
        navigate('/login')
    }


    return (
        <section className={style.sectionStyle}>
            <h2>Vi hjælper dig på vej til din næste frivillig job</h2>
            <button onClick={login}>Log ind eller opret dig</button>
        </section>
    )
}
