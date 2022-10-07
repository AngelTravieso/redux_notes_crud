import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <>
      <div>RegisterPage</div>
      <Link component={ RouterLink } to='/login'>
            Ingresar
      </Link>
    </>
  )
}
