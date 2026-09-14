import style from './Button.module.scss'

export function Button() {

    return(
        <section className={style.sectionStyle}>
            <h2>Vi hjælper dig på vej til din næste frivillig job</h2>
            <button>Log ind eller opret dig</button>
        </section>
    )
}