import React from 'react';

import ThemeMode from './components/buttonTheme'

import './App.css'

const App = () => {
  return (
    <div className='container'>
      <h1>
      Light / Dark
      </h1>
      <ThemeMode/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam atque pariatur officia quasi sed fugiat vitae explicabo, nesciunt quo blanditiis reprehenderit ducimus cupiditate quia, architecto, id minima inventore placeat?</p>
    </div>
  );
}

export default App;