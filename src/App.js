import Colorchange from './changingTextcolor';
import Boxchange from './Boxcolorchange';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<Colorchange />}
        {<Boxchange />}
      </header>
    </div>
  );
}

export default App;
