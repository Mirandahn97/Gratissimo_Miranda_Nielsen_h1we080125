import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/Fetch'
import style from './Slider.module.scss'

export function Slider() {

    const url = 'http://localhost:4000/api/testimony'

    const { data, isloading, error } = useFetch(url)

    const [currentIndex, setCurrentIndex] = useState(0)


    // Skifter slide hvert 3. sekund
    useEffect(() => {

        if (!data || data.length === 0) return

        const interval = setInterval(() => {

            setCurrentIndex((currentIndex) => {

                if (currentIndex === data.length - 1) {
                    return 0
                }

                return currentIndex + 1
            })

        }, 10000)

        return () => clearInterval(interval)

    }, [data])


    if (isloading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Der skete en fejl</p>
    }

    if (!data || data.length === 0) {
        return <p>Ingen testimonials fundet</p>
    }


    const currentTestimony = data[currentIndex]


    return (
        <section className={style.sliderStyle}>

            <article>
                <h2>{currentTestimony.title}</h2>

                <p>{currentTestimony.content}</p>

                <p>{currentTestimony.name}</p>
            </article>


            <div className={style.dots}>

                {data.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={index === currentIndex ? style.active : ''}
                    >
                    </button>
                ))}

            </div>

        </section>
    )
}