import style from './MyButton.module.scss'

export function MyButton() {

    return (
        <section className={style.sectionStyle}>
                <button className={style.left}>Mine annoncer</button>
                <button className={style.right}>Mine farvoritter</button>
        </section>
    )
}