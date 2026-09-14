import { AllNews } from "../../components/AllNews/AllNews";
import { Footer } from "../../components/Footer/Footer";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { Button } from "../../components/Button/Button";

export function NewsPage() {

    return(
        <>
        <Logo></Logo>
        <Nav></Nav>
        <Button></Button>
        <AllNews></AllNews>
        <Footer></Footer>

        </>
    )
}