import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray);
`

export const LoginBox = styled.div`
    width: 500px;
    max-width: 80%;
    min-height: 220px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 2rem 1rem 2rem;
    gap: 1rem;
`


export const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media(max-width:435px){
        justify-content:center;
    }
`