import styled from "styled-components";

export const StyledSingUp =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .contain-header{
        display:flex;
        align-items: center;
        justify-content: space-between;
        gap: 70px;
    }
    h2{
        color:#FF577F;

    }
    
    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;

        margin:10px;
        background-color:#212529;
        min-width:320px;
        max-width:420px;
        height: 720px;
    }
    h3{
        color: #F8F9FA;
        font-size: 15px;
        font-weight: 700;
        text-align:center;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        width: 90%;
    }
    form button{
        background-color: #FF577F;
        color: #FFFFFF;
        font-size: 13px;
        font-weight: 500;
        width: 100%;
        height: 39px;
        border: none;
        border-radius: 4px;
    }
    form select{
        border:none;
        width: 100%;
        height: 38px;
        padding-left: 8px;
        border-radius: 4px;
        color: #868E96;
        background-color: #343B41;
    }
    p{
        color: #868E96;
        font-size: 10px;
        font-weight: 600;
    }
   form input{
        display: flex;
        flex-direction: column;
        border:none;
        width: 275px;
        height: 38px;
        padding-left: 8px;
        border-radius: 4px;
        color: #868E96;
        background-color: #343B41;

    }
    input::placeholder {
    color: #868E96;
}
    label{
        color: #868E96;
    }
    .btt-cadastrar{
        text-decoration: none;
        display:flex;
        justify-content:center;
        align-items:center;
        width: 80px;
        height: 39px;
        border-radius: 4px;

        font-size: 10px;
        font-weight: 600;

        background-color: #212529;
        color: #F8F9FA;
    }
    
`