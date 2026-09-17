import { Footer } from "../../components/Footer/Footer";
import { LoginSection } from "../../components/LoginSection/LoginSection";
import { Logo } from "../../components/Logo/Logo";
import { Nav } from "../../components/Nav/Nav";
import { Signup } from "../../components/Signup/Signup";

export function SignupPage() {

    return(
        <>
        <Logo></Logo>
        <Nav></Nav>
        <LoginSection></LoginSection>
        <Signup></Signup>
        <Footer></Footer>
        </>
    )
}