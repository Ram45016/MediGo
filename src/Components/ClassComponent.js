import React from "react";

const Hlo1=()=>{
    let password
    alert("Hlo");
}

class Hlo extends React.Component
{
    render()
    {
        return(
        <div>
            <h1>Login Form</h1>
           <p>Username: <input type="text" placeholder=" Enter your username"></input>
           </p>
           <p>Password: <input type="password" placeholder="Enter your password"></input>
           </p>
           <button onClick={Hlo1}>LOGIN</button>
        </div>
        );
    }
}   
export default Hlo