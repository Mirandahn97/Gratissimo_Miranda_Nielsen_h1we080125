import heart from '../../assets/heart.png'
import style from './JobCard.module.scss'

export function JobCard({ job }) {



    return (
        <section className={style.sectionStyle}>
            <div className={style.textStyle}>
                <p>{job.organization}</p>
                <h2>{job.title}</h2>
                <p>{job.description}</p>
            </div>
            <div>
                <div>
                    <p>Lokation:{job.city}</p>
                    <p>Indrykket:{job.createdAt}</p>
                    <div className={style.btnStyle}>
                        <button>Gem <img src={heart} alt="" /></button>
                        <button>Åben</button>
                    </div>
                </div>
            </div>
        </section>
    )
}