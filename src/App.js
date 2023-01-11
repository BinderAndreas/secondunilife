import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage';
import CityDetailsPage from './pages/CityDetailsPage';
import HomeDetailsPage from './pages/HomeDetailsPage';

function App() {


  return (
    <BrowserRouter>
       <Header />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/seeallcities' element={<SeeAllCitiesPage />}/>
          <Route path='/citydetails/:cityId' element={<CityDetailsPage />}/>
          <Route path='/homedetails/:id' element={<HomeDetailsPage />}/>
        </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
