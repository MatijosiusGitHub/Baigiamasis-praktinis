import React, {useState} from 'react';
import LoginForm from './komponentai/LoginForm';
function App() {
  const adminUser={
    email: "ITadminas@adm.com",
    passwordas: "abc123"
  }
const[user, setUser] = useState({name: "", email: ""});
const [error, setError] = useState ("");

const Login = details=>{
  console.log (detales);
const Logout = ()=>{
  console.log ("Logout");
   }
}
return (
    <div className="App">
     {(user.email !="")}
      <div className='Sveiki pagaliau prisijungę!'>
        <h2>Sveiki pagaliau prisijungę!<span>{user.name}</span></h2>
        <button> Logout</button>
      </div>
      
    
      <LoginForm Login={Login} error={error}/>
     )
   
    </div>
  );
}

export default App;
