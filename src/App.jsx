import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
/*import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';*/
import './App.css';
import Header from './components/Header/Header.jsx';
import Body from './components/Body/Body.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    
      <div className='App'>
      <Header/>
      <Body />
      <Footer />
      </div>
  )
}

export default App
