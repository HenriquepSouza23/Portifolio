import styled, {css, keyframes} from "styled-components";

const center = css`
display: flex;
justify-content: center;
align-items: center;
`

export const BoxInicio = styled.section`
height: 90vh;
${center}
`

export const Informacoes = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
letter-spacing: 2px;
padding: 0 15px;
max-width: 50%;
h1{
    font-family: "Raleway", sans-serif;
    font-size: 45px;
    margin-bottom: 20px;
}
p{
    font-family: "Raleway", sans-serif;
    font-size: 24px;
    margin-bottom: 10px;
}
`
export const ContainerFoto = styled.div`
img{
    max-width: 250px;
    border-radius: 50%;
}
`
export const SombraInterna = styled.div`
border-radius: 50%;
background: linear-gradient(to right, #8a35cb, #18c063, #00eea2);
background-size: 180% 180%;
animation: gradient-animation 5s ease infinite;

@keyframes gradient-animation {
    0%{
        background-position: 0% 50%;
    }

    50%{
        background-position: 100% 50%;
    }

    100%{
        background-position: 0% 50%;
    }
}
`

export const RedesSociais = styled.ul`
display: flex;
gap: 20px;
a i{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 10px;
    text-align: center;
    font-size: 26px;
    transition: 0.1s;
}
a i:hover{
    color: #9443d8;
    border: 1px solid #9443d8;
    transform: scale(1.1);
}
`