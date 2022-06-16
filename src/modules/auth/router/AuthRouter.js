import React from 'react'

import { Routes, Route } from 'react-router-dom';
import { LoginView } from '../views/LoginView';
import { RegisterView } from '../views/RegisterView';

export const AuthRouter = () => {
  return (
    <>
        <div>

            <Routes>
                <Route path="/login" element={ <LoginView /> } />
                <Route path="/register" element={ <RegisterView /> } />
                <Route path="*" element={<LoginView /> } />
            </Routes>

        </div>
    </>
  )
}
