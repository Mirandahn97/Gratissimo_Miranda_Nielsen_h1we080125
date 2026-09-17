import { Logo } from "../../components/Logo/Logo"
import { Nav } from "../../components/Nav/Nav"
import { Footer } from "../../components/Footer/Footer"
import { Button } from "../../components/Button/Button"
import { Search } from "../../components/Search/Search"
import { useLocation } from "react-router"
import { useFetch } from "../../hooks/Fetch"
import { useEffect } from "react"


export function AllJobsPage() {
    const location = useLocation()

    let categoryId
    let region
    let category
    let searchText
    let workTime
    let workAtHome

    const stateData = location.state 

    let hasFilters = false



    console.log(stateData)

    if(stateData.categoryId) {
        categoryId = stateData.categoryId
        hasFilters = true
    }

    if(stateData.region && stateData.region != 'region') {
        region = stateData.region
        hasFilters = true
    }

    if(stateData.category && stateData.category != 'category') {
        category = stateData.category
        hasFilters = true
    }

    if(stateData.searchText && stateData.searchText != '') {
        searchText = stateData.searchText
        hasFilters = true
    }

    if(stateData.workAtHome && stateData.workAtHome != 'workAtHome') {
        workAtHome = stateData.workAtHome
        hasFilters = true
    }

    if(stateData.workTime && stateData.workTime != 'workTime') {
        workTime = stateData.workTime
        hasFilters = true
    }


    const url = 'http://localhost:4000/api/job-listings'

    const { data, isLoading, error } = useFetch(url)

    let filteredJobs

    if (hasFilters) {

        filteredJobs = data?.filter((job) => (
            (!categoryId || String(job.jobCategoryId) === String(categoryId)) &&
            (!region || job.region?.name === region) &&
            (!category || job.jobCategory?.name === category) &&
            (!searchText || job.title?.toLowerCase().includes(searchText.toLowerCase())) &&
            (!workTime || job.workType.type === workTime) &&
            (!workAtHome || job.workHome === workAtHome)
        ))
    } else {
        filteredJobs = data
    }


    console.log(data);

    console.log(filteredJobs);







    return (
        <>
            <Logo></Logo>
            <Nav></Nav>
            <Button></Button>
            <Search></Search>
            {/* {filteredJobs && <p>{filteredJobs[0].title}</p>} */}
            <Footer></Footer>
        </>
    )
} 