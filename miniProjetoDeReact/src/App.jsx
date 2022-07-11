import './App.css';

import Clock from './components/Clock';
import YearsOld from './components/YearsOld';
import LetsCount from './components/LetsCount';

function App() {
  return (
    <div className="App">
      <Clock />
      <YearsOld />
      <LetsCount/>
    </div>
  );
}

export default App;