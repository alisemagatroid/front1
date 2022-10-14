import React from "react"
import './SideBox.css'
import { NavLink } from "react-router-dom";

function SideBox() {
    return (
        <nav>
            <div className="S_Bar">
                <div className="S_Wrapper">
                    <div className="S_Menu">
                        <h3 className="S_Title">대시보드</h3>
                        <nav>
                            <ul className="S_List">
                                <li className="S_ListItem">
                                    <NavLink to="/">메인메뉴</NavLink>
                                </li>
                                <li className="S_ListItem">
                                    <NavLink to="/ProcessView"> 프로세스 </NavLink>
                                </li>
                                <li className="S_ListItem">
                                    <NavLink to="/DTE">DTE 시나리오</NavLink>
                                </li>                                
                            </ul>
                            <h3 className="S_Title">Componets</h3>
                            <ul className="S_List">
                                <li className="S_ListItem">
                                   <NavLink to="/SelectSellData">구매 데이터 선택</NavLink>
                                </li>
                                <li className="S_ListItem">
                                <NavLink to ="/GenNftMain"> Sell Data </NavLink>
                                </li>
                                <li className="S_ListItem">
                                    Charts
                                </li>
                            </ul>



                            <h3 className="S_Title">Notification</h3>
                            <ul className="S_List">
                                <li className="S_ListItem">
                                    Mail
                                </li>
                                <li className="S_ListItem">
                                    Feedback
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default SideBox