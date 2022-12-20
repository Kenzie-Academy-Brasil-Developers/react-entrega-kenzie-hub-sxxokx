import React, { useContext } from "react";
import NewTodoForm from "../../components/NewTodoForm";
import { Techs } from "../../components/Todos";
import { UserContext } from "../../UserContext/UserContext";
import { StyledDashboard } from "./style";


export const DashboardPage = () => {
    const {user, userLogOff} = useContext(UserContext);
    const { open, setOpen } = useContext(UserContext);

    return(
        <StyledDashboard>
            <div className="div-headerDash">
                <h2>Kenzie Hub</h2>
                <button className="btt-sair" onClick={() => userLogOff()}>Sair</button>
            </div>
            <div >
                <div className="container-infos">
                    <h3>{`Olá, ${user.name}`}</h3>
                    <div>
                    <p>{user.course_module}</p>
                    <p>{user.bio}</p>
                </div>
                </div>
                <div className="container-ul-list">
                    <div className="flex-container">
                        <h3>Tecnologias</h3>
                        <button onClick={()=>{setOpen(true)}}>+</button>
                    </div>
                    <ul>
                        <Techs/>
                        {open? <NewTodoForm />:<></>}                                                        
                    </ul>
                </div>
            </div>
        </StyledDashboard>
    )
}