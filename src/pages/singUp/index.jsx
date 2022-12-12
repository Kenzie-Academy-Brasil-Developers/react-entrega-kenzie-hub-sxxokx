import React from "react";
import { Link,  useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { api } from "../../api/api";
import { StyledSingUp } from "./style";
import { toast, } from 'react-toastify';


export const SingUpPage = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate()

     const userRegister =  async(data) => {
        console.log(data)
        try {
          const response = await api.post('/users', data)
          console.log(response.data)
          toast.success('Conta criada com sucesso')
          navigate('/')
        } catch (error) {
          console.error(error)
          toast.error('Esse e-mail já existe')
        }  
      }

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
                <Input id="password" label="Senha" type="password" placeholder="Sua senha" register={register("password")}/>
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