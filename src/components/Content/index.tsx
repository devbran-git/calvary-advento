import { dataBase, Reads } from "../../data/dataBase"
import { Session } from "../Session"
import { Container, Playlist, PlaylistTitle, Footer } from './styles'

import divider from '../../assets/divider.svg'
import logo from '../../assets/logo.png'
import { useEffect, useState } from "react"

export function Content() {
  const { hope, peace, joy, love } = dataBase

  const [hopeReads, setHopeReads] = useState<Reads[]>(dataBase.hope.read)
  const [peaceReads, setPeaceReads] = useState<Reads[]>(dataBase.peace.read)
  const [joyReads, setJoyReads] = useState<Reads[]>(dataBase.joy.read)
  const [loveReads, setLoveReads] = useState<Reads[]>(dataBase.love.read)

  const dataHopeKey = '@advento:checked_hope_read'
  const dataPeaceKey = '@advento:checked_peace_read'
  const dataJoyKey = '@advento:checked_joy_read'
  const dataLoveKey = '@advento:checked_love_read'

  const onCheckHopeReads = (date: string) => {
    let updatedReads = hopeReads.map(read => {
      if (read.date === date) return { ...read, checked: !read.checked };
      return { ...read };
    });

    localStorage.setItem(dataHopeKey, JSON.stringify(updatedReads))
    setHopeReads(updatedReads)
  }

  const onCheckPeaceReads = (date: string) => {
    let updatedReads = peaceReads.map(read => {
      if (read.date === date) return { ...read, checked: !read.checked };
      return { ...read };
    });

    localStorage.setItem(dataPeaceKey, JSON.stringify(updatedReads))
    setPeaceReads(updatedReads)
  }

  const onCheckJoyReads = (date: string) => {
    let updatedReads = joyReads.map(read => {
      if (read.date === date) return { ...read, checked: !read.checked };
      return { ...read };
    });

    localStorage.setItem(dataJoyKey, JSON.stringify(updatedReads))
    setJoyReads(updatedReads)
  }

  const onCheckLoveReads = (date: string) => {
    let updatedReads = loveReads.map(read => {
      if (read.date === date) return { ...read, checked: !read.checked };
      return { ...read };
    });

    localStorage.setItem(dataLoveKey, JSON.stringify(updatedReads))
    setLoveReads(updatedReads)
  }

  const loadStorageData = () => {
    let hopeResponse = localStorage.getItem(dataHopeKey)
    let dataHope = hopeResponse ? JSON.parse(hopeResponse) : hope.read

    let peaceResponse = localStorage.getItem(dataPeaceKey)
    let dataPeace = peaceResponse ? JSON.parse(peaceResponse) : peace.read

    let joyResponse = localStorage.getItem(dataJoyKey)
    let dataJoy = joyResponse ? JSON.parse(joyResponse) : joy.read

    let loveResponse = localStorage.getItem(dataLoveKey)
    let dataLove = loveResponse ? JSON.parse(loveResponse) : joy.read

    setHopeReads(dataHope)
    setPeaceReads(dataPeace)
    setJoyReads(dataJoy)
    setLoveReads(dataLove)
  }

  useEffect(() => {
    loadStorageData()
  }, [])

  return (
    <Container>
      <div id="hope" />
      <Session reads={hopeReads} onCheckRead={onCheckHopeReads} {...hope} />

      <hr id="peace" />
      <Session inverted reads={peaceReads} onCheckRead={onCheckPeaceReads} {...peace} />

      <hr id="joy" />
      <Session reads={joyReads} onCheckRead={onCheckJoyReads} {...joy} />

      <hr id="love" />
      <Session inverted reads={loveReads} onCheckRead={onCheckLoveReads} {...love} />
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