import React from 'react';

import ButtonTheme from './components/ButtonTheme';

import './App.css';

const App = () => {

  return (
    <>
    
    <div class="container">
        <h1>Light / Dark Mode</h1>
        <div class="toggle-container">
          <ButtonTheme/>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ducimus repellendus dolorem eum consequatur id exercitationem nesciunt, inventore modi perferendis impedit esse, tempora officia, ipsam quae libero. Nostrum, alias dignissimos.</p>
    </div>

    </>
  );
}

export default App;