// import React from 'react'
import LandingPage from './Pages/GeneralEnglish'
import HomePage from './Pages/Home'
import PracticeToiec from './Pages/PracticeToeic'
import PracticeIELTS from './Pages/PracticeIELTS'
import RegisterTest from './Pages/RegisterTest'
import RegisterAccount from './Pages/RegisterAccount'
import ResultPage from './Pages/ResultPage'
import ComingSoon from './Pages/ComingSoon'
const routes = [
    {
        path : '/',
        exact : true,
        component: HomePage
    },
    {
        path : '/tieng-anh-tong-quat',
        exact : false,
        component :LandingPage
    },
    {
        path : '/luyen-thi-TOEIC',
        exact : false,
        component : PracticeToiec
    },
    {
        path : '/luyen-thi-IELTS',
        exact : false,
        component : PracticeIELTS
    },
    {
        path : '/dang-ky-thi-thu',
        exact : false,
        component : RegisterTest
    },
    {
        path: '/dang-ky-tai-khoan',
        exact: false,
        component: RegisterAccount
    },
    {
        path: '/result-test/:id',
        exact: false,
        component: ResultPage 
        // main: () => <ResultPage />
    },
    {
        path: '/coming-soon',
        exact: false,
        component: ComingSoon
    }
]

export default routes;