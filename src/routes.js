import React from 'react'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/Home'
const routes = [
    {
        path : '/',
        exact : true,
        main: () => <HomePage />
    },
    {
        path : '/tieng-anh-tong-quat',
        exact : false,
        main : () => <LandingPage />
    }
]

export default routes;