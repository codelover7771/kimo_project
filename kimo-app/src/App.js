
import './App.css';
import AllRoutes from './AllRoutes';
import Navbar from './components/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import CandD from './components/CandD';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <HeroSection/>
    <Highlights/>
    <CandD/>
    <Footer/>
      {/* <SignUp />
      <Login />
      <Dashboard /> */}
    </BrowserRouter>
   

  );
}

export default App;
