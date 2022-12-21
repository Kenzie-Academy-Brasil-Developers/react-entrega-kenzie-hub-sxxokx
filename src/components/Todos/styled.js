import styled from "styled-components";

export const StyledTechsUser = styled.li`
    width:80vw;
    height: 50vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
    overflow-y: scroll;
    ::-webkit-scrollbar{
    display: none;
    }
    h3{
        color: #F8F9FA;
        font-size: 14px;
        font-weight: 700;
    }
    .trashDel{
        border: none;
        border-radius: 4px;
        background-color: #212529;
        color: #F8F9FA;
        width:32px;
        height:32px;
    }
    .trashButton{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 28px;
    }
    .container-infoTechs{
    height: 40px;
    width:90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#121214;
    gap: 130px;
    border-radius: 8px;
    padding: 5px 15px 5px 15px;
    cursor: pointer;
    }
    @media(min-width: 800px){
        width: 100vw;

    .container-infoTechs{
        height: 40px;
        width:500px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color:#121214;
        border-radius: 8px;
    }
    
    }
`