import { AuthRoute } from '../auth/routes/AuthRoute'
import { CheckingAuth } from '../ui'
import { JournalRoute } from '../journal/routes/JournalRoute'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useCheckAuth } from '../hooks/useCheckAuth'
import React, { useEffect } from 'react'

export const AppRouter = () => {

    const status = useCheckAuth();

    if (status === 'checking') {
        return <CheckingAuth />
    };

    return (
        <Routes>
            {
                (status === 'authenticated')
                    ? <Route path='/*' element={<JournalRoute />} />
                    : <Route path='/auth/*' element={<AuthRoute />} />

            }
            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    )
}
