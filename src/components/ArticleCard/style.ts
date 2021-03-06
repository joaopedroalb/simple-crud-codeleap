import styled from "styled-components";

export const ArticleCard = styled.article`
    width: 723px;
    max-width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid var(--dark-gray);
`

export const ContentInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.8rem;
    gap: 1rem;
`

export const ContentTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--dark-gray);
`

export const NameUser = styled.h2`
    font-size: 18px;
    font-weight: 700;
    line-height: 21.09px;
`

export const DateText = styled.h2`
    font-weight: 400;
    font-size: 18px;
    line-height: 21.09px;
`

export const Paragraph = styled.p`
    width: 100%;
    text-align: left;
    white-space: break-spaces;
`

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    font-size: 22px;

    @media(max-width:635px){
        font-size: 13px;
    }

    svg{
        cursor: pointer;
        
        transition: 400ms;
        &:hover{
            opacity: .85;
        }
    }
`

export const DeleteContainer = styled.div`
    background-color: var(--white);
    width: 661px;
    max-width: 80%;
    height: 168px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;

    p{
        font-size: 22px;
        font-weight: 400;
        line-height: 25.78px;
    }

    button{
        padding: 0.4rem;
        width: 111px;
        min-height: 33px;
        border: 2px solid var(--black);
        background: var(--white);
        font-size: 16px;
        font-weight: 700;
        line-height: 18.75px;
        cursor: pointer;
    }
`

export const RowButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    gap: 1rem;

    @media(max-width:435px){
        justify-content:center;
    }
`