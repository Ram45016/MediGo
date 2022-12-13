import React from "react";
import { Component } from "react";
class InMount extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={
            name:"Sathya"
        }
        console.log("Constructor")
    }
    
    componentDidMount(){
        console.log("Component did mount only once after render")
    }
    render(){
        console.log("render called")
        return(
            <div>
                <h2>Welcome to lifecycle</h2>
            </div>
        )
    }
}
export default InMount