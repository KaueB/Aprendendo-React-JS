import React from 'react';

import './App.css'
import './buttonTheme.css'

const App = () => {

  return (
    <>
    
    <input type="checkbox" id="theme-switcher"/>
    <div id="app-container">
        <div class="theme-switcher-area">
            <label for="theme-switcher" class="theme-switcher-button"></label>
        </div>

        <h1>Mudando tema com CSS Puro</h1>
        <p>O texto fica em contraste com o fundo</p>
        <input type='switch'/>  
    </div>

    </>
  );
}

export default App;