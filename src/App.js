import React from 'react';

import './App.css';

import NavBar from './components/nav/nav.component';
import HeaderImage from './components/header-image/header-image.component';
import ImageContainer from './components/images-container/images-container.component';

const App = () => {
  
  return(
    <div>
      <NavBar />
      <HeaderImage />
      <ImageContainer />
    </div>
)}

export default App;
