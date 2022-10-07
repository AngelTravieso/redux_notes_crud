import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <>
        <div>LoginPage</div>
        <Link component={ RouterLink } to='/register'>
            Crear Cuenta
        </Link>
    </>
  )
}
