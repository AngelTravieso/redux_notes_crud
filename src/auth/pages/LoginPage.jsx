import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { AuthLayout } from '../layout/AuthLayout';

const formData = {
  email: '',
  password: '',
}

const formValidation = {
  email: [ (value) => value.includes('@'), 'El correo debe tener una @.' ],
  password: [ (value) => value.length >= 6, 'La contraseña debe tener más de 6 letras.' ],
}

export const LoginPage = () => {

  const { 
    formState, email, password,
    isFormValid, emailValid, passwordValid,
    onInputChange
  } = useForm(formData, formValidation);

  const onSubmit = (evt) => {
    evt.preventDefault();

    console.log({
      formState,
      isFormValid,
    })

    console.log('submit');

  }

  return (
    <AuthLayout title='Ingresar'>
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              autoComplete="off"
              fullWidth
              value={ email }
              onChange={ onInputChange }
              // helperText='asds'
              // error
            />
          </Grid>

          <Grid item  xs={12} sx={{ mt: 2, }} >
            <TextField
              id="password"
              name="password"
              label="Contraseña"
              variant="outlined"
              type="password"
              autoComplete="off"
              fullWidth
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid container sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} sx={{ pr: 2 }}>
              <Button variant='contained' type='submit' fullWidth>Ingresar</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
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
        </Grid>
      </form>
    </AuthLayout>
  )
}
