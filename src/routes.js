import React from 'react'
import Home from './App'
import LandingPage from './Pages/LandingPage/LandingPage'

const routes = [
    {
        path : '/',
        exact : true,
        main: () => <Home />
    },
    {
        path : '/landingpage',
        exact : false,
        main : () => <LandingPage />
    }
]

export default routes;