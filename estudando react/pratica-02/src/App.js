import React from 'react'
import ThemeProvider from './components/ThemeProvider'

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur obcaecati velit aperiam? Similique dignissimos suscipit in velit dolorem debitis dolorum architecto, omnis culpa error libero corrupti eos sit reprehenderit aperiam.</p>
      </ThemeProvider>
    </div>
  );
}

export default App;