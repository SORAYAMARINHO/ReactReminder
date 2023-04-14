import { Container } from "./styles";

interface ButtonProps {
    title: string;
    click?: () => void;
}

export function Button({title, click } : ButtonProps) {
    return <Container onClick={click}> {title} </Container>;
}