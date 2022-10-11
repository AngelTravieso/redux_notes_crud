import { Grid, Typography } from "@mui/material"
import EventBusyIcon from '@mui/icons-material/EventBusy';


export const EmptyNotesViews = () => {
  return (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '75vh', backgroundColor: 'primary.main', borderRadius: 3 }}
    >
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={12}>
                <EventBusyIcon sx={{ fontSize: 100, color: 'white' }} />
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h5" color="white">No hay notas creadas</Typography>
            </Grid>
        </Grid>

    </Grid>
  )
}
