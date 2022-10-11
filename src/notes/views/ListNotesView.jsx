import { Box, Grid, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { Note } from "../components"
import { EmptyNotesViews } from "./EmptyNotesViews";

export const ListNotesView = () => {

  const { notes } = useSelector( state => state.notes );

  return (
    <Box sx={{ padding: 4 }}>
      <Grid item sx={{ mb: 5 }}>
          <Typography variant="h4">Lista de Notas</Typography>
      </Grid>

    {/* Si hay notas */}
    { (notes.length >= 1)
      ? ( <ul>
        {
          notes.map(note => (
            <Note key={note.id} {...note} />
          ))
        }
        </ul> )
      : ( <EmptyNotesViews /> )
    }

    </Box>
  )
}
