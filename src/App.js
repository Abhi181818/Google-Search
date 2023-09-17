// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Routes from './components/Rout';
import { useState } from 'react';
function App() {
  // const [isDark,setDark]=useState(false)
  return (
    <div className='dark'>
      <div className='bg-gray-900 min-h-screen'>
        <Navbar/>
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
