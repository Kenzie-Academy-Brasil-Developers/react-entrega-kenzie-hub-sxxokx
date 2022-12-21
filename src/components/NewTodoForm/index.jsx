import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, } from "react";
import { schemaTech } from "../../pages/dashboard/schemaTech";
import { UserContext } from "../../UserContext/UserContext";
import { Input } from "../Input";
import { StyledModal } from "./styled";
import { useState } from "react";
import { useForm } from "react-hook-form";



function NewTodoForm() {
    const { createTech, setOpen } = useContext(UserContext);
        
    const { register, handleSubmit, formState : {errors}} = useForm({

        resolver:yupResolver(schemaTech),
    
      });

      const submitTechs = (data) => {
        createTech(data)
   }
    return (
        <StyledModal>
            <div className="contain-headModal">
                <h3>Cadastrar Tecnologia</h3>
                <button onClick={()=>{setOpen(false)}}>X</button>
            </div>
            <div className="BG-form">
                <form onSubmit={handleSubmit(submitTechs)}>
                <label htmlFor="">Nome da Tech</label>
                    <Input id="title"  type="text" name="title" placeholder="Digite o nome da Tecnologia" register={register('title')}/>
                    <p>{errors.title?.message}</p>
                    <label htmlFor="">Selecionar status</label>
                    <select required name="status" id="status"  {...register('status')}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button type="submit">Cadastrar Tecnologia</button>
                </form>
            </div>
        </StyledModal>
    )
}


export default NewTodoForm;