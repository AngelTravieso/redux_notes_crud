import { Box } from "@mui/material"
import { Navbar } from "../components"

export const NotesLayout = ({ children }) => {
  return (
    <Box>
        <Navbar />
        { children }
    </Box>
  )
}
