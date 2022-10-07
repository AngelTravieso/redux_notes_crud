import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../auth/pages'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={ <LoginPage /> } />
        <Route path='login' element={ <LoginPage /> } />
        <Route path='register' element={ <RegisterPage /> } />

        <Route path='/*' element={ <Navigate to='/' /> } />

    </Routes>
  )
}