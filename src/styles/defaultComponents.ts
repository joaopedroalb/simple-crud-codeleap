import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    height: 32px;
    border: 1px solid var(--dark-gray);
    border-radius: 4px;
    padding: .4rem;

    &:focus{
        outline: none;
    }
`

export const Button = styled.button`
    padding: 0.1rem;
    width: 111px;
    height: 33px;
    border: none;
    background: var(--black);
    color: var(--white);
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;

    &:disabled{
        opacity: .7;
    }
`

export const InputTextBox = styled.input`

`

export const Title = styled.h1`
    margin-bottom: 1rem;
    font-size: 22px;
    line-height: 25.78px;
    font-weight: 700;
`

export const Label = styled.label`
    font-weight: 400;
    font-size: 16px;
    line-height: 18.75px;
`