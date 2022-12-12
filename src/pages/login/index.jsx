import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSchema } from "./loginSchema";
import { yupResolver } from "@hookform/resolvers/yup"
import { StyledLogin } from "./style";

export const LoginPage = ({ userLogin}) => {
   const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(loginSchema)});
    const[loading, setLoading] = useState(false)
   
   const submitLogin = (data) => {
        userLogin(data, setLoading)
   }

    return(
        <StyledLogin>
            <h1>Kenzie Hub</h1>
            <section>
            <h3>Login</h3>
            <form onSubmit={handleSubmit(submitLogin)}>
               {errors.email && <p>{errors.email.message}</p>}
               <Input id="email" label="E-mail" type="text" placeholder="Seu email" register={register("email")} disabled={loading}/>
                {errors.password && <p>{errors.password.message}</p>}
               <Input id="password" label="Senha" type="password" placeholder="Sua senha" register={register("password")} disabled={loading}/>
                <button type="submit" disabled={loading}>{loading ? 'Entrando' : 'Entrar'}</button>
            </form>
            <p>Ainda não possui uma conta?</p>
            <Link className="btt-cadastro" to='/register'>Cadastre-se</Link>
            </section>
        </StyledLogin>
    )   
}