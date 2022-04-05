import styled from "styled-components";

export const HomeContainer = styled.div`
    min-height: 100vh;
    width: 800px;
    max-width: 100%;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const Header = styled.header`
    width: 100%;
    background-color: var(--black);
    padding: 27px 37px 27px 37px;
    height: 80px;
    color: var(--white);
`

export const FormArticle = styled.form`
    width: 723px;
    max-width: 80%;
    margin: 2rem 0 1rem 0;
    border: 1px solid var(--dark-gray);
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`

