import React from "react";
import styled from "styled-components";
import './TobBox.css'
import { FaBell, FaAlignJustify } from "react-icons/fa"


const TopBoxStyle = styled.div `

`


//왜 마진 적용 안되노 시발
function TopBox() {
    return (
     <div className="T_bar">
        <div className="T_Wrapper">
            <div className="T_Left">
                <span className="T_Logo">DTE</span>
            </div>

            <div className="T_Right">
                <div className="T_IconContainer">   
                    < FaBell /> 
                    < FaAlignJustify />
                </div>
            </div>
        </div>
     </div> 
     
     
    )
}

export default TopBox