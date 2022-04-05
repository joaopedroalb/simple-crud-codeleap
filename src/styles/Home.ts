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
    gap: 2rem;
    padding-bottom: 2rem;
`

export const FormArticle = styled.form`
    width: 723px;
    max-width: 95%;
    margin-top: .5rem;
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

