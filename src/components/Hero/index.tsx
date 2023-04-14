import { Container } from "./styles";
import heroImg from "../../assets/images/Hero.png"

export function Hero() {
    return(
        <Container>
            <img src={heroImg} alt="" />
        </Container>
    );

}