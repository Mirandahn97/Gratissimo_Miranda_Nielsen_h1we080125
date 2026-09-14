import { Login } from "../../components/Login/Login";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "../../components/Button/Button";
import { LoginSection } from "../../components/LoginSection/LoginSection";

export function LoginPage() {

    return(
        <>
        <Logo></Logo>
        <Nav></Nav>
        <Button></Button>
        <LoginSection></LoginSection>
        <Login></Login>
        <Footer></Footer>
        </>
    )
}