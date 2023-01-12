import React,{useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './components/Pages/Homepage/Homepage';
import Banner from './components/Banner/Banner';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CityDetails from './components/Pages/CityDetails/CityDetails';
import Cities from './components/Pages/Cities/Cities';

function App() {

  return (
    <div className="app">
    <BrowserRouter>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/citydetail/:cityId" element={<CityDetails />} />
        <Route path="/cities" element={<Cities />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;