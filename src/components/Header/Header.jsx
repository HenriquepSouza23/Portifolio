import * as S from "./styled"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <S.Header>
        <a href="#">
          <S.Logo>HS</S.Logo>
        </a>
        <S.Menu>
          <li>
            <Link to="/">Inicio</Link>
            </li>
          <li>
            <Link to="/sobre">Sobre Mim</Link>
          </li>
          <li>
            <Link to="projetos">Projetos</Link>
          </li>
        </S.Menu>
    </S.Header>
  )
}
