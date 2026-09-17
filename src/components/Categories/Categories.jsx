import { useFetch } from "../../hooks/Fetch"
import style from './Categories.module.scss'
import { useNavigate } from "react-router"

export function Categories() {

    const navigate = useNavigate()

    const categoryUrl = 'http://localhost:4000/api/job-categories'
    const jobsUrl = 'http://localhost:4000/api/job-listings'

    const { data: categoryData , isloading: categoryIsLoading, error: categoryError } = useFetch(categoryUrl)

    const { data: jobsData , isloading: jobsIsLoading, error: jobsError } = useFetch(jobsUrl)

    function handleClick(e) {
        
        const categoryId = e.currentTarget.getAttribute('categoryid')
        
        navigate('/allejobs', {
            state: {
                categoryId: categoryId
            }
        })
    }
  


    return (
        <>
            <section className={style.categorieStyle}>
                <h2>Find job ved kategori</h2>
                <div className={style.boxStyle}>
                {categoryData && categoryData?.map((categories) => (
                    <div onClick={handleClick} key={categories.id} categoryid={categories.id}>
                        <p>{categories.name}</p>
                        <p>{jobsData?.filter((job) => job.jobCategoryId == categories.id).length}</p>
                    </div>
                ))}
                </div>
            </section>
        </>
    )
}