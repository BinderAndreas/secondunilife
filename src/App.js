import React,{useState} from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
const [email,setEmail]=useState('')


const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(email)
}

  return (
    <div>
       <Header />
        <div className='body'>
          
        </div>
       <Footer />
    </div>
  );
}

export default App;
