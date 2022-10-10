import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";

export const Navbar = () => {

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
                Notas
            </Typography>
            <Button color="inherit" onClick={ onLogout }>
                Salir
            </Button>
        </Toolbar>
    </AppBar>
  )
}
