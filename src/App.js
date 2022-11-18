import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';

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
        
        </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
