import styled,{css} from "styled-components"

const center = css`
display: flex;
justify-content: center;
align-items: center;
`
export const Main = styled.main`
height: 90vh;
${center}
`
export const Informacoes = styled.section`
width: 50%;
text-align: center;
h1{
    padding: 10px;
    font-size: 2rem;
}
h2{
    padding: 10px;
    margin-top: 30px;
}
div{
    padding: 10px;
}
`
export const Habilidade = styled.div`
height: 21vh;
${center}
a i{
    padding: 40px;
    font-size: 35px;
}
`