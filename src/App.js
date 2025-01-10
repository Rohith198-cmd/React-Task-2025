import './App.css';
import Header from './Header';
import Main from './Main';

function App(){
  const Persons=[{
    name:'raju',
age:21,
city:'kerala'
  },{
    name:'rajesh',
age:20,
city:'andhra'
  },{
    name:'rohith',
age:24,
city:'chennai'
  }]
console.log(Persons);

  return(
    <div className='App'>
      <Header Persons={Persons} />
      <Main Persons={Persons}/>
    </div>
  )
}
export default App;

