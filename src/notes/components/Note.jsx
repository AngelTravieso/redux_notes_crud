import { Button, Grid, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"


export const Note = ({ title, date }) => {
    return (
        <Grid container alignItems="center" sx={{ mt: 3 }}>
            <Grid item sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{ title }</Typography>
                <Typography variant="caption" color={ grey[700] }>{ date }</Typography>
            </Grid>
            <Grid item>
                <Button color="warning" variant="contained" sx={{ mr: 1 }}>Editar</Button>
                <Button color="error" variant="contained">Eliminar</Button>
            </Grid>
        </Grid>
    )
}
