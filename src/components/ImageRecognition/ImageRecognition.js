import React from "react";
import "./ImageRecognition.css"

const ImageRecognition = () =>{
    return (
        <div>

            <p className="f3">
                This Magic Brain will detect faces in the picture.Give it a Try.
            </p>
            <div className="center">
            <div className="form center pa4 br3 shadow-5 ba b--white">
                <input type="text" className="pa2 f4 w-70 ba b--black center"/>
                <button className="f4 grow link ph3 pv2 w-30 dib bg-light-purple white ba b--white">Detect</button>
            </div>
            </div>

        </div>
    )
}

export default ImageRecognition;