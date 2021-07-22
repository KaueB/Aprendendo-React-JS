import React, {useState} from 'react';

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask"
import './App.css';

const App = () => {
  // let messagem = "Hello world!!!"
  /*  const [messagem, setMessagem] = useState("Hello world!!!") */
  const [ tasks, setTasks] = useState ([
    {
      id: "1",
      title: "Estudando Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true,
    },  
  ]);

  return (
  <>
  
    <div className="container">
      <AddTask />
      <Tasks tasks={tasks} />
    </div>

  </>
  );
};

export default App;