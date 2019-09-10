import React from 'react'
import LandingPage from './Pages/GeneralEnglish'
import HomePage from './Pages/Home'
import PracticeToiec from './Pages/PracticeToeic'
import PracticeIELTS from './Pages/PracticeIELTS'
import RegisterTest from './Pages/RegisterTest'
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
    },
    {
        path : '/luyen-thi-TOEIC',
        exact : false,
        main : () => <PracticeToiec />
    },
    {
        path : '/luyen-thi-IELTS',
        exact : false,
        main : () => <PracticeIELTS />
    },
    {
        path : '/dang-ky-thi-thu',
        exact : false,
        main : () => <RegisterTest />
    }
]

export default routes;