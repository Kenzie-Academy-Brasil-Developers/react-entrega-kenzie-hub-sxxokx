import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    top: 0;
    right: 0;
    z-index:99;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    .container-modal-auth{
        background-color: #212529;
        color: #F8F9FA;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 14.5474px 1px 15.6694px 19px;
        gap: 12px;
    }
    form{
        background-color: #212529;
        color: #F8F9FA;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 14.5474px 1px 15.6694px 19px;
        gap: 12px;
    }
    form label{
        font-size: 10px;
        font-weight: 400;
        display:flex;
        text-align:start;
        
    }
    form input{
        width: 90%;
        height: 39px;
        background-color: #343B41;
        color: #F8F9FA;
        font-size: 13px;
        font-weight: 400;
        border: solid 1px #F8F9FA;
        border-radius: 4px;
        
       
    }
    form select{
        width: 90%;
        height: 39px;
        background-color: #343B41;
        color: #F8F9FA;
        padding-left: 12px;
        font-size: 13px;
        font-weight: 400;
        border: solid 1px #F8F9FA;
        border-radius: 4px;

    }
    form button{
        text-align: center;
        width: 90%;
        height: 39px;
        background-color: #FF577F;
        color: #F8F9FA;
        padding-left: 12px;
        font-size: 13px;
        font-weight: 500;
        border: none;
        border-radius: 4px;
    }
    .button-del{
        text-align: center;
        width: 90%;
        height: 39px;
        background-color: #FF577F;
        color: #F8F9FA;
        padding-left: 12px;
        font-size: 13px;
        font-weight: 500;
        border: none;
        border-radius: 4px;
    }
    .contain-modalAuth{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .BG-form{
        background-color: #212529;
        width: 98%;
        max-width: 330px;
        height: 300px;
        
    }
    .contain-headModal{
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 120px;
        background-color: #343B41;
        width: 98%;
        max-width: 330px;
        
    }
    .contain-headModal h3{
        font-size: 12px;
        font-weight: 700;
    }
    .contain-headModal button{
        border: none;
        background-color: transparent;
        color: #868E96;
    }
    @media(min-width: 800px){
    .contain-headModal{
        background-color: #343B41;
        width: 98%;
        max-width: 330px;
        
    }
    .contain-headModal h3{
        display:flex;
        flex-direction:column;
        font-size: 12px;
        font-weight: 700;
        
    }
    .contain-headModal button{
        border: none;
        background-color: transparent;
        color: #868E96;
       
}       
    }
`