
import './App.css';
import AllRoutes from './AllRoutes';
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import CandD from './components/CandD';
import Footer from './components/Footer';
import Activity from './pages/Actiivity';

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
     <AllRoutes/>
     <Footer/>
    </>
    // {/* <Navbar/>
    // <HeroSection/>
    // <Highlights/>
    // <CandD/>
    // <Footer/> */}
    //   {/* <SignUp />
    //   <Login />
    //   <Dashboard /> 
    //   {/* <Activity/> */}
    
   

  );
}

export default App;
