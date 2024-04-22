import React from 'react'
import * as S from "./styled"

export default function Sobre() {
  return (
    <S.Main>
      <S.Informacoes>
        <h1>Sobre mim</h1>
        <p>Estou sempre me desafiando com novos projetos e buscando feedback na
          comunidade de programação, além de compartilhar meus conhecimentos. 😁</p>
          <p>Ah, também sou fã de jogos, filmes, séries e animes. 💜</p>
          
        <h2>Habilidades</h2>
        <S.Habilidade>
          <a href="#" title="html">
            
          <i class="devicon-html5-plain"></i>
          
          </a>
          <a href="#" title="css3">
            
          <i class="devicon-css3-plain"></i>
          
          </a>
          <a href="#" title="javascript">
            
          <i class="devicon-javascript-plain"></i>
          
          </a>
          <a href="#" title="react">
            
          <i class="devicon-react-original"></i>
          
          </a>
        </S.Habilidade>
      </S.Informacoes>
    </S.Main>
  )
}
