import { Logo } from "../Logo";
import { Container } from "./styles";
import { Button } from "../Button";
import { NewStickyModal } from "../NewStickyModal";
import { useState } from "react";

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    return (
    <Container>
        <Logo />
        <Button title="Adicionar lembrete" click={() => handleOpenModal()} />
        <NewStickyModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />     
    </Container>
    );
}
