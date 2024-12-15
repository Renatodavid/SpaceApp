import { styled } from "styled-components"

const FigureEstilizada = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 95%;
    background-size: cover;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`

const TituloEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`

const Banner = ({ texto, backgroundImage }) => {
    return (<FigureEstilizada $backgroundImage={backgroundImage}>
        <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>)
}

export default Banner