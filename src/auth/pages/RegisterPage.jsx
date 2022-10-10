import { Button, Grid, Link, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Registro'>
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              id="name"
              label="Nombre Completo"
              variant="outlined"
              autoComplete="off"
              fullWidth
            />                  
          </Grid>

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
            <Grid item xs={12} sm={12}>
              <Button variant='contained' fullWidth>Crear Cuenta</Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end' sx={{ mt: 1 }}>
            <Link component={ RouterLink } to='/auth/login' underline='none'>
              ¿Ya tienes cuenta?  
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
