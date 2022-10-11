import { Navigate, Route, Routes } from "react-router-dom";

import { NotesPage } from "../pages";


export const NotesRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <NotesPage /> } />
        <Route path='/*' element={ <Navigate to='/' /> } />
    </Routes>
  )
}
