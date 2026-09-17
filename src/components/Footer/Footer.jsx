import { NavLink } from 'react-router'
import { useAuth } from '../../provider/auth.provider'
import style from './Footer.module.scss'
import LinkedIn from '../../assets/LinkedIn.png'
import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import Google from '../../assets/Google.png'

export function Footer() {

    const { loginData } = useAuth()

    function handleSubmit(e) {

        e.preventDefault();

        if (!loginData) {
            window.alert('Du skal være logget ind for at tilmedle dig')
        } else {

            const form = e.target
            const email = form.email.value

            const formData = new FormData(form)
            const formJson = Object.fromEntries(formData.entries())
            console.log(formJson);
            const bodyData = JSON.stringify(formJson)

            fetch('http://localhost:4000/api/newsletter', {
                method: 'POST', body: bodyData, headers: {
                    "Content-Type": 'application/json',
                    "Authorization": 'Bearer ' + loginData.accessToken
                }
            })
                .then(
                    res => res.json()
                ).then(
                    window.alert('Du er nu tilmeldt nyhedsbrevet!')

                )
        }

    }

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
                <form onSubmit={handleSubmit} action="">
                    <input name='email' type="email" placeholder='@ intast email...' />
                    <button type='submit'>Tilmeld</button>
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