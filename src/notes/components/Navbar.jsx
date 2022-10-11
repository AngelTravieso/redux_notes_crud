import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";

import { startLogout } from "../../store/auth";


export const Navbar = () => {

    const { displayName } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch( startLogout() )
    }

  return (
    <AppBar position="static">
        <Toolbar>
            <Typography
                variant="h6"
                component="div"
                sx={{
                    flexGrow: 1,
                }}
            >
                Bienvenido { displayName }
            </Typography>
            <Button color="inherit" onClick={ onLogout }>
                Salir
            </Button>
        </Toolbar>
    </AppBar>
  )
}
