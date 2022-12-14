import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
  email: '',
  password: '',
}

const formValidation = {
  email: [ (value) => value.includes('@'), 'El correo debe tener una @.' ],
  password: [ (value) => value.length >= 6, 'La contraseña debe tener más de 6 letras.' ],
}

export const LoginPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === 'checking', [ status ]);

  const { 
    formState, email, password,
    isFormValid, emailValid, passwordValid,
    onInputChange
  } = useForm(formData, formValidation);

  const onSubmit = (evt) => {
    evt.preventDefault();

    setFormSubmitted(true);

    if(!isFormValid) return;

    dispatch( startLoginWithEmailAndPassword( formState ) );

  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
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
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
              disabled={ isAuthenticating }
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
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
              disabled={ isAuthenticating }
            />
          </Grid>

          <Grid item xs={12} display={ !!errorMessage ? '' : 'none' } sx={{ 
            mt: 2
          }}
          >
            <Alert severity="error">{ errorMessage }</Alert>
          </Grid>

          <Grid container sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} sx={{ pr: 2 }}>
              <Button
                variant='contained'
                type='submit'
                fullWidth
                disabled={ isAuthenticating }
              >
                Ingresar
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='contained' fullWidth onClick={ onGoogleSignIn }>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end' sx={{ mt: 1 }}>
            <Link component={ RouterLink } to='/auth/register' underline='none'>
              Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
