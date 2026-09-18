import { Button } from "../../components/Button/Button";
import { Create } from "../../components/Create/Create";
import { CreateAnnonce } from "../../components/CreateAnnonce/CreateAnnonce";
import { Footer } from "../../components/Footer/Footer";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";

export function AnnoncePage() {


    return(
        <>
        <Logo></Logo>
        <Nav></Nav>
        <Button></Button>
        <CreateAnnonce></CreateAnnonce>
        <Create></Create>
        <Footer></Footer>
        </>
    )
}