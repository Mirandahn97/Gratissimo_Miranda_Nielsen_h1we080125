import { useFetch } from "../../hooks/Fetch"
import style from './Create.module.scss'

export function Create() {
    const regionUrl = 'http://localhost:4000/api/regions'
    const categoryUrl = 'http://localhost:4000/api/job-categories'

    const {
        data: regionData,
        isloading: regionIsLoading,
        error: regionError
    } = useFetch(regionUrl)

    const {
        data: categoryData,
        isloading: categoryIsLoading,
        error: categoryError
    } = useFetch(categoryUrl)

    const workTime = ['Deltid', 'Fuldtid', 'Flex']
    const workAtHome = ['On-site', 'Remote', 'Hybrid']

    return (
        <section className={style.sectionStyle}>
            <div className={style.lefStyle}>
                <div>
                    <label htmlFor="header">Overskrift</label>
                    <input type="text" placeholder="eks. mågejæger søges..." />
                </div>
                <div>
                    <label htmlFor="organisation">Organisation/forening</label>
                    <input type="text" placeholder="Skriv din forening her..." />
                </div>
                <div className={style.filterStyle}>
                    <select>
                        <option value="">Kategori</option>
                        {categoryData?.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <select>
                        <option value="">Arbejdstid</option>
                        {workTime.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    <select>
                        <option value="">Hjemmearbejde</option>
                        {workAtHome.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <div><label htmlFor="adress">Adresse</label>
                        <input type="text" placeholder="Eks. Holmegade 22, 1. sal" />
                    </div>
                    <div>
                        <label htmlFor="zipcode">Postnummer</label>
                        <input type="number" placeholder="Eks. 9200" />
                    </div>
                    <div>
                        <label htmlFor="city"></label>
                        <input type="text" placeholder="Eks. Aalborg SV" />
                    </div>
                </div>
            </div>
            <div className={style.rightStyle}>
                <label htmlFor="desceptrion">Job beskrivelse</label>
                <textarea name="" id="" placeholder="Her kan du beskrive jobbet, hvilke erfaringer der kræves og hvad der forventes af den frivillige..."></textarea>

            </div>
        </section>
    )
}

