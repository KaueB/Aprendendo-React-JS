import React, {useState} from 'react'
import './App.css'


const App = () => {
  // let messagem = "Hello world!!!"
  const [messagem, setMessagem] = useState("Hello world!!!")

  return (
  <div>
  
    <div className="container">
      {messagem} <br/> 
    <button onClick={() => setMessagem("HELLOO")}>Mudar mensagem</button>
    </div>

  </div>
  );
}

export default App;