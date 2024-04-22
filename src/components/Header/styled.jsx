import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
}
a{
    text-decoration: none;
    color: white;
}
ul{
    list-style: none;
}
li{
    list-style: none;
}
body{
background-color: #282828;
font-family: "Poppins", sans-serif;
margin: 0 auto;
max-width: 1120px;
background: linear-gradient(150deg, #000000, #9443d8);
background-size: 120% 120%;
}
html{
    color: #fff;
}
`
export const Header = styled.header`
height: 15vh;
display: flex;
align-items: center;
justify-content: space-evenly;
`
export const Logo = styled.h1`
width: 65px;
height: 65px;
border-radius: 50%;
border: 1px solid #fff;
text-decoration: underline;
text-align: center;
line-height: 55px;
`
export const Menu = styled.nav`
width: 30vw;
display: flex;
justify-content: space-between;
font-size: 1.3rem;
`