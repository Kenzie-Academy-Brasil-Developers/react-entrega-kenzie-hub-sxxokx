import { useContext, useState } from "react"
import { UserContext } from "../../UserContext/UserContext";
import { StyledTechsUser } from "./styled";

export const Techs = ()=>{
    const { user, deleteTech } = useContext(UserContext);  
    let techs = user.techs
  
    return (
        <StyledTechsUser>
            {techs.map((element,index) => (
                <div className="container-infoTechs"  key={index}>
                    <h3>{element.title}</h3>
                    <div className="trashButton">
                        <p>{element.status}</p> 
                        <button onClick={() => deleteTech(element.id)}>X</button>                                                              
                    </div> 
                </div>                              
            ))}            
        </StyledTechsUser>
    )
}
            