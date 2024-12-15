import { styled } from "styled-components"
import search from './search.png'

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;


const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado {...props} />
            <IconeLupa src={search} alt="ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto