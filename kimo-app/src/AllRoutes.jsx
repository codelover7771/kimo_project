import React from 'react'
import Activity from './pages/Actiivity'
import { Route, Routes } from "react-router-dom"
import App from './App'


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/Home" element={<App/>}/>
            <Route path="/activity" element={<Activity />} />
        </Routes>
    )
}

export default AllRoutes