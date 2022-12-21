import {React, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../UserContext/UserContext";
import { Input } from "../Input";
import { StyledModal } from "../NewTodoForm/styled";

export function ModalAuthDel({element}) {
    console.log(element)
    const { editTech,  deleteTech, techOpen, setTechOpen } = useContext(UserContext);
    const { register, handleSubmit, formState : {errors}} = useForm({});
    const ediTechs = (data) => {
        editTech(data)
   }

   function closeModal () {
    setTechOpen(false)
   }

        return(
            <StyledModal>
                <div className="container-modal-auth">
                    <div className="contain-modalAuth">
                        <h3>Atualize sua tecnologia</h3>
                        <button onClick={()=> closeModal()}>X</button>
                    </div>
                    <form onSubmit={handleSubmit(ediTechs)}>
                        {/* <label htmlFor="">Nome da Tech</label>
                        <Input id="title" type="text" name="title" placeholder="Digite o nome da Tecnologia" register={register('title')}/>                    */}
                        <h3>Nome da Tech ({element.title})</h3>
                        <label htmlFor="">Selecionar status</label>
                        <h3>Nível da Tech ({element.status})</h3>
                        <select required name="status" id="status"  {...register('status')}>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        <div>
                            <button type="submit">Salvar alterações</button>
                        </div>
                    </form>
                    <button className="button-del" onClick={() => deleteTech(element.id)}>Deletar</button>
                </div>
        </StyledModal>
        )
    }