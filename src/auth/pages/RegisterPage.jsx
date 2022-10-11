import { Alert, Button, Grid, Link, TextField } from '@mui/material';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailAndPassword } from '../../store/auth';
import { AuthLayout } from '../layout/AuthLayout';

const formData = {
  displayName: '',
  email: '',
  password: '',
}

const formValidation = {
  displayName: [ (value) => value.length >= 2, 'El nombre debe contener mínimo 2 letras.' ],
  email: [ (value) => value.includes('@'), 'El correo debe tener una @.' ],
  password: [ (value) => value.length >= 6, 'La contraseña debe tener más de 6 letras.' ],
}

export const RegisterPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth )
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const isCheckingAuthentication = useMemo(() => status === 'checking', [ status ]);

  const {
    formState, displayName, email, password,
    isFormValid, displayNameValid, emailValid, passwordValid,
    onInputChange
  } = useForm(formData, formValidation);

  const onSubmit = ( evt ) => {

    evt.preventDefault();

    setFormSubmitted(true);

    if(!isFormValid) return;

    dispatch( startCreatingUserWithEmailAndPassword( formState ) );

    setFormSubmitted(false);

  }

  return (
    <AuthLayout title='Registro'>
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              name="displayName"
              label="Nombre Completo"
              variant="outlined"
              autoComplete="off"
              fullWidth
              value={ displayName }
              onChange={ onInputChange }
              helperText={ displayNameValid }
              error={ !!displayNameValid && formSubmitted }
            />         
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              autoComplete="off"
              fullWidth
              value={ email }
              onChange={ onInputChange }
              helperText={ emailValid }
              error={ !!emailValid && formSubmitted }
            />
          </Grid>

          <Grid item  xs={12} sx={{ mt: 2, }} >
            <TextField
              name="password"
              label="Contraseña"
              variant="outlined"
              type="password"
              autoComplete="off"
              fullWidth
              value={ password }
              onChange={ onInputChange }
              helperText={ passwordValid }
              error={ !!passwordValid && formSubmitted }
            />
          </Grid>

          <Grid item xs={12} display={ !!errorMessage ? '' : 'none' } sx={{ 
            mt: 2
          }}
          >
            <Alert severity="error">{ errorMessage }</Alert>
          </Grid>

          <Grid container sx={{ mt: 2 }}>
            <Grid item xs={12} sm={12}>
              <Button
                variant='contained'
                type='submit'
                fullWidth
                disabled={ isCheckingAuthentication }
              >
                Crear Cuenta
              </Button>
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
