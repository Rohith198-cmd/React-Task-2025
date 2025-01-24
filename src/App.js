
import './App.css';
import { DataContextProvider } from './dataContext';
import Main from './Main';


function App() {
  return (
    <div className="App">
    <DataContextProvider>
        <Main />
      </DataContextProvider>
    </div>
  );
}
export default App
