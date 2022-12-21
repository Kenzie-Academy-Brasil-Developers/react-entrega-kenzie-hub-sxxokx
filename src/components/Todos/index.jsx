import { useContext } from "react"
import { UserContext } from "../../UserContext/UserContext";
import { StyledTechsUser } from "./styled";
import { ModalAuthDel } from "../ModalTechs";

export const Techs = () => {
    const { user, techOpen, setTechOpen, deleteTech } = useContext(UserContext); 
    let techs = user.techs
  
    return (
        <StyledTechsUser>
            {techs.map((element,index) => (
            <>
                <div className="container-infoTechs"  key={index}  >
                    <h3>{element.title}</h3>
                    <div  className="trashButton">
                        <p onClick={()=> setTechOpen(true)}>{element.status}</p> 
                        <button className="trashDel" onClick={() => deleteTech(element.id)}>X</button>
                    </div>  
                </div>                              
                {techOpen && <ModalAuthDel element={element}/> }                                                              
            </>
            ))}            
        </StyledTechsUser>
    )
}
            