import { Grid } from "@mui/material";

import { NotesLayout } from "../layout/NotesLayout";
import { AddNoteView, ListNotesView } from "../views";


export const NotesPage = () => {
  return (
    <NotesLayout>
        <Grid container>
          <Grid item xs={6} 
            sx={{ 
              flexGrow: 1,
              minHeight: '75vh'
            }}
          >
            <AddNoteView />
          </Grid>
          <Grid item xs={6} sx={{ flexGrow: 1 }}>
            <ListNotesView />
          </Grid>
        </Grid>
    </NotesLayout>
  )
}
