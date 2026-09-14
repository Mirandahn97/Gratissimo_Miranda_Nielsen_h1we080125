import style from './AllNews.module.scss'
import { useFetch } from "../../hooks/Fetch"


export function AllNews() {

    const url = 'http://localhost:4000/api/articles'

    const { data, isLoading, error } = useFetch(url)
    console.log(data);


    return (
        <section className={style.sectionStyle}>
            {data?.map((articles) => (
                <div className={style.newsStyle} key={articles.id}>
                    <img src={`http://localhost:4000${articles.imageUrl}`} alt="" />
                    <div className={style.datoStyle}>
                        <p>{articles.createdAt}</p>
                        <p>{articles.author}</p>
                    </div>
                    <p >{articles.title}</p>
                </div>
            ))}
        </section>
    )
}