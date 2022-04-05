import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray);
`

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

export const InputTextBox = styled.textarea`
    width: 100%;
    min-height: 75px;
    border: 1px solid var(--dark-gray);
    border-radius: 4px;
    padding: .4rem;
    resize: none;

    &:focus{
        outline: none;
    }   
`

type TitleProps = {
    isArticle?:boolean
}

export const Title = styled.h1<TitleProps>`
    font-size: 22px;
    line-height: 25.78px;
    font-weight: 700;

    @media(max-width:635px){
        ${props=>props.isArticle&&`font-size: 13px;`}
    }
`

export const Label = styled.label`
    font-weight: 400;
    font-size: 16px;
    line-height: 18.75px;
`

export const BtnContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media(max-width:435px){
        justify-content:center;
    }
`

export const Header = styled.header`
    width: 100%;
    background-color: var(--black);
    padding: 27px 37px 27px 37px;
    height: 80px;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width:635px){
        padding: 17px;
    }
`