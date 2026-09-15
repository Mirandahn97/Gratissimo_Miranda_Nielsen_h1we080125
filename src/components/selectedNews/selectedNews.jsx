import { useFetch } from "../../hooks/Fetch"
import style from'./selectedNews.module.scss'

export function SelectedNews() {

    const url = 'http://localhost:4000/api/articles'

    const { data, isloading, error } = useFetch(url)
    console.log(data)

    let selectedNewsArray

    if (data) {
        selectedNewsArray = data
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .slice(0, 3)
    }

    console.log(selectedNewsArray);




    return (
        <section className={style.sectionStyle}>
            {selectedNewsArray && selectedNewsArray.map((articles) => (
                <>
                    <div className={style.newStyle} key={articles.id}>
                        <img src={`http://localhost:4000${articles.imageUrl}`} alt="" />
                        <div>
                            <p>{articles.createdAt}</p>
                            <p>{articles.author}</p>
                        </div>
                        <p >{articles.title}</p>
                    </div>
                </>
            ))}

        </section>
    )
}