import style from './Search.module.scss'
import search50 from '../../assets/search50.svg'
import { useFetch } from '../../hooks/Fetch'
import { useNavigate, useLocation } from 'react-router'

export function Search() {

    const navigate = useNavigate()
    const location = useLocation()

    const regionUrl = 'http://localhost:4000/api/regions'
    const categoryUrl = 'http://localhost:4000/api/job-categories'

    const { data: categoryData, isloading: categoryIsLoading, error: categoryError } = useFetch(categoryUrl)
    const { data: regionData, isloading: regionIsLoading, error: regionError } = useFetch(regionUrl)

    const workTime = ['Deltid', 'Fuldtid', 'Flex']
    const workAtHome = ['On-site', 'Remote', 'Hybrid']


    function handleSearch(e) {
        const searchedText = e.target.parentElement.querySelector('input').value
        const filterSelects = e.target.parentElement.parentElement.querySelector('#searchFilters').querySelectorAll('select')
        const regionFilterValue = filterSelects[0].value
        const categoryFilterValue = filterSelects[1].value
        const workTimeFilterValue = filterSelects[2].value
        const workAtHomeFilterValue = filterSelects[3].value



        navigate('/allejobs', {
            state: {
                searchText: searchedText,
                region: regionFilterValue,
                category: categoryFilterValue,
                workTime: workTimeFilterValue,
                workAtHome: workAtHomeFilterValue
            }
        })




    }

    function handleClick(e) {
        const filterSelects = e.target.parentElement.querySelectorAll('select')
        
        filterSelects.forEach((select) => {
            select.selectedIndex = 0
        })
        
    }

    return (
        <section className={style.sectionStyle}>
            <h2>Søg frivilligt arbejde:</h2>
            <div className={style.searchStyle}>
                <img src={search50} alt="" />
                <input name='searchBar' type="text" placeholder='Eks. cafémedhjælper..' />
                <button onClick={handleSearch}>Søg</button>
            </div>
            <div className={style.filterStyle} id='searchFilters'>
                <p>Filtrer:</p>
                <select>
                    <option hidden defaultValue='Region' value="region">Region</option>
                    {regionData && regionData.map((region)=> (
                        <option key={region.id}>{region.name}</option>
                    ))}
                </select>
                <select>
                    <option hidden defaultValue='Kategorier' value="category">Kategorier</option>
                    {categoryData && categoryData.map((category)=> (
                        <option key={category.id}>{category.name}</option>
                    ))}
                </select>
                <select>
                    <option hidden defaultValue='Arbejdstid' value="workTime">Arbejdstid</option>
                    {workTime && workTime.map((workTime, index)=> (
                        <option key={index}>{workTime}</option>
                    ))}
                </select>
                 <select>
                    <option hidden defaultValue='Hjemmearbejde' value="workAtHome">Hjemmearbejde</option>
                    {workAtHome && workAtHome.map((workAtHome, index)=> (
                        <option key={index}>{workAtHome}</option>
                    ))}
                </select>
                <p onClick={handleClick}>Nulstil</p>
            </div>
        </section>
    )
}