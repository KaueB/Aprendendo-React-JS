import React from 'react';

import ThemeMode from './components/buttonTheme'

import './App.css'

const App = () => {
  return (
    <div className="App">
        <h1>Theme mode</h1>
        <p>É para mudar o tema!!!</p>
        <ThemeMode/>
    </div>
  );
}

export default App;