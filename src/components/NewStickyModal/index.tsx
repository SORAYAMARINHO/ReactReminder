
import { Button } from "../Button";
import { Container } from "./styles"; 
import Modal from "react-modal";
import NotesContext from "../hooks/notesContext";
import { useContext, useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewStickyModal({ isOpen, onRequestClose}: ModalProps){
    Modal.setAppElement("#root");
 const [stickyName, setStickName] = useState("");
 const [stickyDescription, setStickDescription] = useState("");

 const { notes, setNotes} = useContext<any>(NotesContext);
 const formData = {
    title: stickyName,
    description: stickyDescription,
 };

  function handleFormSubmit(event: any) {
    event.preventDefault();
    event.target.reset();
    onRequestClose();
  }
    return (
        <Modal
            isOpen = {isOpen}
            onRequestClose = {onRequestClose}
            shouldCloseOnEsc={true}
            className="react-modal-content"
            style={{
            overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.409)",
          },
        }}
       >
          <Container onSubmit={handleFormSubmit}>
           <h1>Criar Lembrete</h1>
           <div>
            <input type="text" placeholder="Nome" />
            <textarea placeholder="Descrição" onChange={event}></textarea>
            </div>    
            <Button 
            title="Adicionar Lembrete" 
            click={() => setNotes([...notes, formData])} />
           </Container>
           </Modal>
    );
}