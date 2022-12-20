import React, { useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { api } from "../../api/api";
import { StyledSingUp } from "./style";
import { toast, } from 'react-toastify';
import { UserContext } from "../../UserContext/UserContext";


export const SingUpPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
  
    const {userRegister} = useContext(UserContext);

    return(
        <StyledSingUp>
            <div className="contain-header">
                <h2>Kenzie Hub</h2>
                <Link className="btt-cadastrar" to='/'>Voltar</Link>  
            </div>
            <section>
            <h3>Crie sua conta</h3>
            <p>Rapído e grátis, vamos nessa</p>
            <form onSubmit={handleSubmit(userRegister)}>
                <Input id="name" label="Nome" type="text" placeholder="Seu Nome" register={register("name")}/>
                <Input id="email" label="E-mail" type="text" placeholder="Seu email" register={register("email")}/>                
                <Input id="password" label="Senha" type="password" placeholder="Escolha sua senha/ mínimo 6 digitos" register={register("password")}/>
                <Input id="bio" label="Bio" type="text" placeholder="Fale sobre você" register={register("bio")} />
                <Input id="contact" label="Contato" type="text" placeholder="Opção de contato" register={register("contact")} />
                <label htmlFor="course_module" ></label>
                <select defaultValue={'DEFAULT'} required name="" id="course_module"  {...register('course_module')}>
                <option value="DEFAULT" disabled  >Selecione módulo</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
            </select>
                    <button type="submit">Cadastrar</button>         
            </form>
            </section>

        </StyledSingUp>
    )
}