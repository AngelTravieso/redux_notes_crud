import { Box, Button, Grid, TextField, Typography } from "@mui/material"

export const AddNote = () => {

    const onAddNote = ( evt ) => {
        evt.preventDefault();

        console.log('agregando nota');

    }

  return (
    <Box sx={{ padding: 4 }}>
        <form>
            <Grid item sx={{ mb: 5 }}>
                <Typography variant="h4">Agregar Nota</Typography>
            </Grid>

            <Grid item sx={{ mb: 5 }}>
                <TextField
                    variant="filled"
                    label="título nota"
                    fullWidth
                />
            </Grid>
            
            <Grid item>
                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    onClick={ onAddNote }
                >
                    Agregar Nota
                </Button>
            </Grid>
        </form>

    </Box>
  )
}
