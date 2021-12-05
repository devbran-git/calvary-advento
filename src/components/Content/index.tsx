import { dataBase } from "../../data/dataBase"
import { Session } from "../Session"
import { Container, Playlist, PlaylistTitle, Footer } from './styles'

import divider from '../../assets/divider.svg'
import logo from '../../assets/logo.png'

export function Content() {
  const { hope, peace, joy, love } = dataBase
  return (
    <Container>
      <div id="hope" />
      <Session {...hope} />
      <hr id="peace" />
      <Session {...peace} inverted />
      <hr id="joy" />
      <Session {...joy} />
      <hr id="love" />
      <Session {...love} inverted />
      <hr />


      <Playlist>
        <hr />
        <PlaylistTitle>Para ouvir</PlaylistTitle>
        <iframe
          title='Playlist Advento 2021'
          src="https://open.spotify.com/embed/playlist/1VAVRaGm08MVBrI8cAhZDN?utm_source=generator" width="100%"
          height="380"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
      </Playlist>

      <Footer>
        <img src={logo} alt="Calvary Curitiba" width={245} />

        <p id="disclaimer">Esse material foi produzido por muitas mãos:</p>
        <p id="contributors">Gabê Almeida, Guilherme Match, Kaká Monteiro e Priscila Nadalin.</p>

        <img src={divider} alt="" width={45} className="divider" />

        <p id="bibliography">REFERÊNCIAS BIBLIOGRÁFICAS:</p>

        <p className="refs">
          BELMONTE, Vanessa. A Estação do Advento. Medium, 2021. Disponível em:
          <a href="https://bit.ly/3pmC0ZR" target="_blank" rel="noreferrer">
            https://bit.ly/3pmC0ZR
          </a>
        </p>

        <p className="refs">
          Bible Project Português. Advento. Youtube, 2021. Disponível em:
          <a href="https://bit.ly/3HXKuPl" target="_blank" rel="noreferrer">
            https://bit.ly/3HXKuPl
          </a>
        </p>
      </Footer>

    </Container>
  )
}