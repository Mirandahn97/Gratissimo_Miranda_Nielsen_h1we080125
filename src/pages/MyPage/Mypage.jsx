import { Footer } from "../../components/Footer/Footer";
import { Logo } from "../../components/Logo/Logo";
import { MyButton } from "../../components/Mybutton/MyButton";
import { Nav } from "../../components/Nav/Nav";
import { Welcome } from "../../components/Welcome/Welcome";

export function MyPage() {

    return (
        <>
            <Logo></Logo>
            <Nav></Nav>
            <Welcome></Welcome>
            <MyButton></MyButton>
            <Footer></Footer>
        </>
    )
}