import { Grid } from "@mui/material";
import { AddNote, ListNotes } from "../components";
import { NotesLayout } from "../layout/NotesLayout";

export const NotesPage = () => {
  return (
    <NotesLayout>
        <Grid container>
          <Grid item xs={6} 
            sx={{ 
              flexGrow: 1,
              minHeight: '100vh'
            }}
          >
            <AddNote />
          </Grid>
          <Grid item xs={6} sx={{ flexGrow: 1 }}>
            <ListNotes />
          </Grid>
        </Grid>
    </NotesLayout>
  )
}
