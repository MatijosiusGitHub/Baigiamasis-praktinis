import React from "react";
 function LoginForm(){
    return(
        <form>
            <div> className='form-inner'
                <h2>Login</h2>
                {/*error*/}
                <div>
                    <label htmlFor="vardas">vardas</label>
                    <input type="text" vardas="" id="vardas"/>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email"/>
                </div>  
                <div> 
                    <label htmlFor="password  ">Password:</label>
                    <input type="password" name="password" id="password"/>
                </div> 
                <input type="submit" value="Login"> </input>
              ;
            </div>
        </form>
        
    )
 }
 export default LoginForm;