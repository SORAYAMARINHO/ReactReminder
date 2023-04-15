import { useContext } from "react";
import NotesContext from "../hooks/notesContext";
import { Container, Grid } from "./styles";

export function StickyNotes() {
  const { notes } = useContext<any>(NotesContext);
  return (
    <Container>
      <div className="reminderTitle">
        <h1>Lembretes - {notes.length}</h1>
      </div>
      <Grid>
        {notes.map((notes: any) => (
          <div key={notes.title}>
            <h2>{notes.title}</h2>
            <p>{notes.description}</p>
          </div>
        ))}
      </Grid>
    </Container>
  );
}