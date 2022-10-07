import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
  return (
    <AuthLayout title='Ingresar'>
      <Grid item xs={12} sx={{ mt: 2 }} >
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          autoComplete="off"
          fullWidth
        />                  
      </Grid>

      <Grid item  xs={12} sx={{ mt: 2, }} >
        <TextField
          id="password"
          label="Contraseña"
          variant="outlined"
          type="password"
          autoComplete="off"
          fullWidth
        />                  
      </Grid>

      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} sx={{ pr: 2 }}>
          <Button variant='contained' fullWidth>Ingresar</Button>
        </Grid>
        <Grid item xs={ 12 } sm={6}>
          <Button variant='contained' fullWidth>
            <Google />
            <Typography sx={{ ml: 1 }}>Google</Typography>
          </Button>
        </Grid>
      </Grid>

      <Grid container direction='row' justifyContent='end' sx={{ mt: 1 }}>
        <Link component={ RouterLink } to='/register' underline='none'>
          Crear cuenta
        </Link>
      </Grid>
    </AuthLayout>
  )
}
