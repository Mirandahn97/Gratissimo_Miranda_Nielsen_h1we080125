import style from './Profile.module.scss'

export function Profile() {

    return (
        <section className={style.sectionStyle}>
            <h2>Rediger profil</h2>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="email"> Email</label>
                        <input type="email" placeholder="Skriv din email..." />
                    </div>
                    <div>
                        <label htmlFor="name">Fornavn</label>
                        <input type="text" placeholder="Skriv dit fornavn..." />
                    </div>
                    <div>
                        <label htmlFor="name">Efternavn</label>
                        <input type="text" placeholder="Skriv dit efternavn..." />
                    </div>
                    <div>
                        <label htmlFor="number">Telefon nummer</label>
                        <input type="number" placeholder="Skriv dit telefon nummer..." />
                    </div>
                    <button>Gem ændringer</button>
                </form>
            </div>
        </section>
    )
}