import { Button } from '../../components/Button/Button'
import { Categories } from '../../components/Categories/Categories'
import { Footer } from '../../components/Footer/Footer'
import { Logo } from '../../components/Logo/Logo'
import {Nav} from '../../components/Nav/Nav'
import { Slider } from '../../components/Slider/Slider'
import { SelectedNews } from '../../components/selectedNews/selectedNews'

export function HomePage() {

    return (
        <>
       <Logo></Logo>
        <Nav></Nav>
        <Button></Button>
        <Categories></Categories>
        <SelectedNews></SelectedNews>
        <Slider></Slider>
        <Footer></Footer>
        </>
    )
}