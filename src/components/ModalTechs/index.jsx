import { React, useContext, useState,  } from "react";
import { StyledModal } from "../NewTodoForm/styled"
import { Input } from "../Input";
import { UserContext } from "../../UserContext/UserContext";
import { useForm } from "react-hook-form";


// export const modalAuthDel = (element) => {
//     const { editTech,  deleteTech } = useContext(UserContext);
//     const [techOpen , setTechOpen] = useState(false)
//     const { register, handleSubmit, formState : {errors}} = useForm({});

//         return(
//         <StyledModal>
//             <div className="contain-headModal">
//                 <h3>Atualize sua tecnologia</h3>
//                 <button onClick={()=>{setTechOpen(false)}}>X</button>
//             </div>
//             <div className="BG-form">
//                 <form onSubmit={handleSubmit()}>
//                 <label htmlFor="">Nome da Tech</label>
//                     <Input id="title"  type="text" name="title" placeholder="Digite o nome da Tecnologia" register={register('title')}/>
                    
//                     <label htmlFor="">Selecionar status</label>
//                     <select required name="status" id="status"  {...register('status')}>
//                         <option value="Iniciante">Iniciante</option>
//                         <option value="Intermediário">Intermediário</option>
//                         <option value="Avançado">Avançado</option>
//                     </select>
//                     <div>
//                         <button type="submit">Salvar alterações</button>
//                         <button onClick={() => deleteTech(element.id)} >Del</button>

//                     </div>
//                 </form>
//             </div>
//         </StyledModal>
//         )
//     }