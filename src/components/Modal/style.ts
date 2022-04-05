import styled from "styled-components";

export const ModalBg = styled.div`
    position: fixed; 
    z-index: 3; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    overflow: auto; 
    background-color: rgba(119, 119, 119, 0.8);; 

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`