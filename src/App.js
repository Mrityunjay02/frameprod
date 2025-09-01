import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import VisitProducts from './components/VisitProducts';


import Team from './components/Team';
import Feedback from './components/Feedback';
import PayFrame from './components/PayFrame';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/payframe" element={<PayFrame />} />
          <Route path="/" element={
            <>
              <HomePage />
              <section id="about">
                <AboutUs />
              </section>
              <section id="products">
                <Products />
              </section>
              <section id="visitproducts">
                <VisitProducts />
              </section>
             

              <section id="team">
                <Team />
              </section>
              <section id="contact" className="bg-gray-900">
                <Feedback />
              </section>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
