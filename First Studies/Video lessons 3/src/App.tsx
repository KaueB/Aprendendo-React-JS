import { useState } from 'react';
import { Count } from './components/Count'

function App() {
  const [counting, setCounting] = useState<number[]>([
    1,
    2,
    3,
  ])

  const [numero, setNumero] = useState(4)

  function createCount() {
    setCounting([...counting, numero])
    setNumero(numero + 1)
  }

  return (
    <div className="App">
      <div className='numberCount'>
        {counting.map(count => {
          return <Count numberCount={count} />
        })}
      </div>

      <button onClick={createCount} className='createCount'>Contar</button>
    </div>
  );
}

export default App;