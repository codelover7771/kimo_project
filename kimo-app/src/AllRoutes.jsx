import React from 'react'
import Activity from './pages/Actiivity'
import { Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage'
import NoMatch from './components/NoMatch'


const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/activity/:activityType" element={<Activity />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    )
}

export default AllRoutes