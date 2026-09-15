import { useFetch } from "../../hooks/Fetch"
import style from './Categories.module.scss'
export function Categories() {

    const categoryUrl = 'http://localhost:4000/api/job-categories'
    const jobsUrl = 'http://localhost:4000/api/job-listings'

    const { data: categoryData , isloading: categoryIsLoading, error: categoryError } = useFetch(categoryUrl)
    console.log(categoryData);

    const { data: jobsData , isloading: jobsIsLoading, error: jobsError } = useFetch(jobsUrl)
    console.log(jobsData);

    


    return (
        <>
            <section className={style.categorieStyle}>
                {categoryData?.map((categories) => (
                    <div key={categories.id}>
                        <p>{categories.name}</p>
                        <p>{jobsData?.filter((job) => job.jobCategoryId == categories.id).length}</p>
                    </div>
                ))}
            </section>
        </>
    )
}