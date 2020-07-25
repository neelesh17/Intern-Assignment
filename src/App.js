import React from 'react';

import './App.css';

import NavBar from './components/nav/nav.component';
import HeaderImage from './components/header-image/header-image.component';
import ContentContainer from './components/content-container/content-container.component';

const App = () => {
  
  return(
    <div>
      <NavBar />
      <HeaderImage />
      <ContentContainer />
    </div>
)}

export default App;
