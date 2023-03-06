import styled from "styled-components";


export const MenuBarDiv = styled.div`
    background-color: grey;
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
`

export const OrderButton = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    gap:8px;
`

export const ButtonMenuBar = styled.button`
    background-color: #F2F2F2;
    border: none;
    border-radius: 5px;
    width: 5%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        background-color: #E5E5E5;
    }   
`