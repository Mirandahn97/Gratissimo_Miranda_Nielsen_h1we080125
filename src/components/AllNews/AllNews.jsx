import style from './AllNews.module.scss'
import { useFetch } from "../../hooks/Fetch"
import { useState } from "react"


export function AllNews() {

    const url = 'http://localhost:4000/api/articles'

    const { data, isLoading, error } = useFetch(url)
    console.log(data);

    const [newsHeader, setNewsHeader] = useState()

    function handleClick(article) {
        setNewsHeader(article)
    }


    return (
        <div>
            {newsHeader || data?.[0] ?
                <div className={style.bigImgStyle}>
                    <img src={`http://localhost:4000${(newsHeader || data[0]).imageUrl}`} alt="" />
                    <h2>{(newsHeader || data[0]).title}</h2>
                    <p>{(newsHeader || data[0]).createdAt} af {(newsHeader || data[0]).author}</p>
                    <p>{(newsHeader || data[0]).content}</p>
                </div>
                : null
            }

            <section className={style.sectionStyle}>
                {data?.map((articles) => (
                    <div onClick={() => handleClick(articles)} className={style.newsStyle} key={articles.id}>
                        <img src={`http://localhost:4000${articles.imageUrl}`} alt="" />
                        <div className={style.datoStyle}>
                            <p>{articles.createdAt}</p>
                            <p>{articles.author}</p>
                        </div>
                        <p >{articles.title}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}