import styled from "styled-components";

export const ArticleCard = styled.article`
    width: 723px;
    max-width: 80%;
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
`