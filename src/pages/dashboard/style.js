import styled from "styled-components";

export const StyledDashboard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    
    .flex-container{
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .flex-container button{
        width: 33px;
        height: 33px;
        background-color:#212529;
        font-size: 18px;
        color: #F8F9FA;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    ul{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap: 10px;
        background-color: #212529;
        padding:24px;
        border-radius: 4px;
        gap: 16px;

    }
   .techs-objt{
        display:flex;
        justify-content:space-between;
        align-items:center;
        text-decoration:none;
        width:100%;
        border: solid 1px ;
        border-radius: 4px;
        padding: 8px;
        background-color:#121214;
   }

    .div-headerDash{
        display:flex;
        align-items: center;
        gap: 70px;
    }
    .container-infos{
        display:flex;
        flex-direction:column;
        border-top: solid 1px  #868E96;
        border-bottom: solid 1px  #868E96;
        width: 100%
    }
    h2{
        color:#FF577F;
       

    }
    
    h3{
        color: #F8F9FA;
        font-size: 15px;
        font-weight: 700;
        text-align: start;
    }

    p{
        color: #868E96;
        font-size: 10px;
        font-weight: 600;
    }

    .btt-sair{
        text-decoration: none;
        display:flex;
        justify-content:center;
        align-items:center;
        width: 55px;
        height: 32px;
        border-radius: 4px;
        border:none;

        font-size: 12px;
        font-weight: 600;

        background-color: #212529;
        color: #F8F9FA;
    }


    @media(min-width:800px){
      
    .container-infos{
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        border-top: solid 1px  #868E96;
        border-bottom: solid 1px  #868E96;
    }
    .div-headerDash{
        display:flex;
        justify-content:space-around;
        gap: 600px;
    }
   
   ul{
        width:90%;
        max-width:800px;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap: 10px;
        background-color: #212529;
        padding:24px;
        border-radius: 4px;
        gap: 16px;
   }
   .container-ul-list{
    display:flex;
    flex-direction:column;
    margin: 0 auto;
    
   }
   .flex-container{
        display:flex;
        justify-content:space-evenly;
        align-items:center;
   }
   
    }
    
`