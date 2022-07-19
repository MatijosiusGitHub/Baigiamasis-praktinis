 import React, {useState} from 'react';

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
     {(user.email !="")}? (
      <div className='Sveiki prisijunge'>
        <h2>Sveiki prisijunge<span>{user.name}</span></h2>
        <button> Logout</button>
      </div>
      
     ):(
      <LoginForm/>
     )

    </div>
  );
}

export default App;
