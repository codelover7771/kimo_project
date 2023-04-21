import React from 'react'
import Activity from './pages/Actiivity'
import { Route, Routes } from "react-router-dom"
import Homepage from './pages/Homepage'
import NoMatch from './components/NoMatch'

// AllRoutes component that defines all the routes for the application
const AllRoutes = () => {
    return (
        <Routes>
            {/* Route for the homepage */}
            <Route path="/" element={<Homepage/>}/>
            
            {/* Route for the activity page */}
            <Route path="/activity/:activityType" element={<Activity />} />
            
            {/* Route for unmatched URLs */}
            <Route path="*" element={<NoMatch />} />
        </Routes>
    )
}

export default AllRoutes
