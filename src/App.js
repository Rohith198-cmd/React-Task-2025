import Navbar from './Navbar';
import Main from './Main';


import Footer from './Footer';

function App() {
  const details=[{
    sno:1,
    name:'kumar',
    gender:'male',
    phoneNumber:1234567890,
    email:'kumar@gmail.com',
    course:'html',
    city:'chennai',
    pincode:600001
    
  },{
    sno:2,
    name:'sithu',
    gender:'male',
    phoneNumber:1234567890,
    email:'sithu@gmail.com',
    course:'html',
    city:'chennai',
    pincode:600001
  },{
    sno:3,
    name:'janu',
    gender:'female',
    phoneNumber:1234567890,
    email:'janu@gmail.com',
    course:'html',
    city:'chennai',
    pincode:600001
  },{
    sno:4,
    name:'thamarai',
    gender:'female',
    phoneNumber:1234567890,
    email:'thamarai@gmail.com',
    course:'html',
    city:'chennai',
    pincode:600001
  },{
    sno:5,
    name:'surya',
    gender:'male',
    phoneNumber:1234567890,
    email:'surya@gmail.com',
    course:'html',
    city:'chennai',
    pincode:600001
  },{
    sno:6,
    name:'raju',
    gender:'male',
    phoneNumber:1234567890,
    email:'raju@gmail.com',
    course:'html',
    city:'chennai',
    pincode:600001
  },{
    sno:7,
    name:'malar',
    gender:'female',
    phoneNumber:1234567890,
    email:'malar@gmail.com',
    course:'html',
    city:'chennai',
    pincode:600001
  },{
    sno:8,
    name:'sundhar',
    gender:'male',
    phoneNumber:1234567890,
    email:'sundhar@gmail.com',
    course:'html',
    city:'chennai',
    pincode:600001
  }]
  console.log(details);

  
  return (
    <>
    <Navbar />
    <Main details={details}/>
    <Footer />
    </>
  );
}

export default App;
