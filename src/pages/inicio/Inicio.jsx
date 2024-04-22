import FotoPerfil from "../../assets/Perfil-foto.png"
import * as S from "./styled"

export default function inicio() {
  return (
    <main>
        <S.BoxInicio>
          <S.Informacoes>
            <h1>Olá! Sou Henrique Souza</h1>
            <p>Um desenvolvedor frontend em formação apaixonado por tecnologia.</p>

            <S.RedesSociais>
              <li>
                <a href="https://github.com/HenriquepSouza23/HenriqSpinto.git" target="_blank">
                  <i class="devicon-github-original"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/henrique-souza-3aa719210/" target="_blank">
                  <i class="devicon-linkedin-plain"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100008755366700" target="_blank">
                  <i class="devicon-facebook-plain"></i>
                </a>
              </li>
            </S.RedesSociais>

          </S.Informacoes>

          <S.ContainerFoto>
            <S.SombraInterna>
              <img src={FotoPerfil} alt="Foto Portiflio Henrique"/>
            </S.SombraInterna>
          </S.ContainerFoto>

        </S.BoxInicio>
    </main>
  )
}
