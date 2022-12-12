import React from "react";
import { Link } from "react-router-dom";
import { StyledDashboard } from "./style";


export const DashboardPage = ({user, userLogOff}) => {
    return(
        <StyledDashboard>
            <div className="div-headerDash">
                <h2>Kenzie Hub</h2>
                <button className="btt-sair" onClick={() => userLogOff()}>Sair</button>
            </div>
            <div className="container-infos">
                <h3>{`Olá, ${user.name}`}</h3>
                <div>
                <p>{user.course_module}</p>
                <p>{user.bio}</p>
                </div>
            </div>
        </StyledDashboard>
    )
}