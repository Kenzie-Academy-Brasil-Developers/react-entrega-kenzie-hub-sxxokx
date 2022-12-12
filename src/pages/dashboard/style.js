import styled from "styled-components";

export const StyledDashboard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    

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


    @media(min-width: 600px){
        display:flex;
        justify-content: space-between;
        position: absolute;
        top: 90px;
        width: 100%;

        .div-headerDash{
        display:flex;
        justify-content:space-around;
        gap: 300px;
    }
    .container-infos{
        display:flex;
        border-top: solid 1px  #868E96;
        border-bottom: solid 1px  #868E96;
        width: 100%
    }

    h3{
        position:relative;
        left: 300px;
    }
   p{
    position:relative;
        left: 300px;
   }
  
    }
    
`