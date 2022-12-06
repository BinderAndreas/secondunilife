import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage';
import CityDetailsPage from './pages/CityDetailsPage';

function App() {
const [email,setEmail]=useState('')


const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(email)
}

  return (
    <BrowserRouter>
       <Header />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/SeeAllCitiesPage/' element={<SeeAllCitiesPage />}/>
          <Route path='/CityDetailsPage/' element={<CityDetailsPage />}/>
        </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
