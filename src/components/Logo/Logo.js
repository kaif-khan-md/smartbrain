import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css"
import brain from "./brain.png"
const Logo = ()=>{
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2 pa2" style={{ height: 100, width: 100 }} options={{max : 55}}>
            <div className="Tilt-inner pa3 grow"><img style={{height: '50px',color:'white'}} src= {brain} alt="nothing"/></div>
            </Tilt>
        </div>
    )
}

export default Logo;