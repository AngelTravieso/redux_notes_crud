import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
          container
          spacing={ 0 }
          direction='column'
          justifyContent='center'
          alignItems='center'
          sx={{
            minHeight: '100vh',
            backgroundColor: 'primary.main',
            padding: 4
          }}
        >

        <Grid
            item
            xs={ 3 }
            sx={{
              width: { sm: 500 },
              backgroundColor: 'white',
              padding: 3,
              borderRadius: 2,
            }}
        >
            <Typography variant='h5'>{ title }</Typography>
            <Grid container>
                { children }
            </Grid>
        </Grid>

    </Grid>
  )
}


// TODO
// propTypes para el title