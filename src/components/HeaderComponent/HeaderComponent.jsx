import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom"
export default function HeaderComponent(){
    return(
        <>
        <div className="header">
        
        
        <NavLink to='/'>Home</NavLink>|
        <NavLink to='/about'>About</NavLink>|
        <NavLink to='/department'>Department</NavLink>|
        <NavLink to='/events'>Events</NavLink>
        
        </div>
        </>
        
    )
}



