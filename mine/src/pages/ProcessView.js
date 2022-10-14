import React from "react";
import './ProcessView.css';
import Pro from '../images/p2.png'


function ProcessView () {

    return (
    <div className="ProcessView">
        <div className="P-Top" >
            <div className="P-Title">
               DTE 프로세스
            </div>
        </div>

        <img className="P-Image"  alt='프로세스' src={Pro} />
    
    </div>
    )

}

export default ProcessView