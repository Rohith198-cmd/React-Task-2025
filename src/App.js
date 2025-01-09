import './App.css';
import Header from'./Header';
import Main from'./Main';
import Footer from'./Footer';


function App() {
  const Persons={
    name:'Rohith',
    age:'24',
    city:'Chennai'

  }
  return (
    <div>
      <Header Persons={Persons} />
      <Main Persons={Persons} />
      <Footer Persons={Persons} />
    </div>
  );
}


export default App;
