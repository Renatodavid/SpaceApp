import { styled } from "styled-components"

const BotaoIcone = styled.button`
    margin-left: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`

export default BotaoIcone