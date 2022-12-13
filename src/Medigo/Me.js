import React, { Component } from "react";
import image from './background.webp' ;
import logo from './logo.jpg';
import './Me.css'


class Ram extends Component{

render(){
    const myStyle={
        backgroundImage: 
        `url('${image}')`,
        height:'100vh',
        marginTop:'-70px',
        fontSize:'20px',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
    };
    return(
<div style={myStyle} >
    <img src={logo} alt="Logo" className="omg"/>
    <h1 style={{color:"darkgreen"}} id="Header">MediGo</h1>
    <hr id="line"></hr>
    <form className="form"></form>
    <h5 id="name">Doctor</h5>
    <form className="box1"></form>
    <p id="info">INFO</p>
    <p id="line2">DR.Sharan,md </p>
    <p id="line3">paediatric surgeon </p>
    <p id="line4">M.S,M.Ch(paediatric Surgery)
    Medic General Medical Hospital 
North Houston, Texas, USA</p>
    <form className="quote"></form>
    <p className="Quo">"The aim of medicine is to</p>
    <p className="Quo1"> prevent disease and prolong</p> 
    <p className="Quo2"> life; the ideal of medicine is to </p>
    <p className="Quo3"> eliminate the need of physician." </p>
    <p className="Quo4">— William J .Mayo</p>
    <form className="table"></form>
    <p id="app">APPOINTMENT DETAILS:</p>
    <p id="pat1">*Karthick - 10:30AM </p>
    <p id="pat2">*Santhosh - 11:00AM</p>
    <p id="pat3">*Shanthakumar - 11:30AM</p>
    <p id="pat4">*ManojKumar - 8:30PM </p>
    <br></br>
    </div>
    )
}


}
export default Ram;
