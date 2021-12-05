import { useState } from 'react'
import {
  Refs,
  Title,
  Verse,
  Divider,
  RefDate,
  DateBox,
  Sessions,
  Practice,
  RefVerse,
  Container,
  BlockLabel,
  WatchLabel,
  TextSession,
  WatchSession,
  TitleInverted,
  WatchDescription
} from './styles'

import { DataBase, Reads } from '../../data/dataBase'

import unchecked from '../../assets/unchecked.svg'
import checked from '../../assets/checked.svg'

interface SessionProps extends DataBase {
  inverted?: boolean
}

export function Session({
  watchDescription,
  memorize,
  practice,
  inverted,
  videoUrl,
  watch,
  title,
  read,
  week,
}: SessionProps) {
  const [reads, setReads] = useState<Reads[]>(read)

  const onCheckRead = (date: string) => {
    const updatedReads = reads.map(read => {
      if (read.date === date) return { ...read, checked: !read.checked };
      return { ...read };
    });

    setReads(updatedReads);
  }

  return (
    <>
      {!inverted ?
        <Container>

          <Title>
            <p>{week}</p>
            <h1>{title}</h1>
          </Title>

          <Sessions>
            <TextSession>

              <BlockLabel>PARA MEMORIZAR</BlockLabel>
              <Verse><em>{memorize}</em></Verse>

              <BlockLabel>PARA LER</BlockLabel>
              {reads.map(ref =>
                <>
                  <Refs className={ref.checked ? "opacity" : "default"}>
                    <div>
                      {ref.checked ?
                        <button onClick={() => onCheckRead(ref.date)}>
                          <img src={checked} alt='' />
                        </button>
                        :
                        <button onClick={() => onCheckRead(ref.date)}>
                          <img src={unchecked} alt='' />
                        </button>
                      }
                      <DateBox>
                        <RefDate>{ref.date}</RefDate>
                      </DateBox>

                      <RefVerse>{ref.ref}</RefVerse>
                    </div>
                  </Refs>
                </>
              )}

              <Divider />

              <BlockLabel>PARA PRATICAR</BlockLabel>
              <Practice>{practice}</Practice>
            </TextSession>

            <WatchSession>
              <iframe width="560" height="315" src={videoUrl} title={watchDescription} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

              <BlockLabel>PARA ASSISTIR</BlockLabel>
              <WatchLabel>{watch}</WatchLabel>
              <WatchDescription>{watchDescription}</WatchDescription>
            </WatchSession>
          </Sessions>
        </Container>
        :
        <Container>
          <Sessions>
            <WatchSession>
              <iframe className="inverted" width="560" height="315" src={videoUrl} title={watchDescription} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

              <BlockLabel>PARA ASSISTIR</BlockLabel>
              <WatchLabel>{watch}</WatchLabel>
              <WatchDescription>{watchDescription}</WatchDescription>
            </WatchSession>

            <TextSession>
              <TitleInverted>
                <p>{week}</p>
                <h1>{title}</h1>
              </TitleInverted>
              <BlockLabel>PARA MEMORIZAR</BlockLabel>
              <Verse><em>{memorize}</em></Verse>

              <BlockLabel>PARA LER</BlockLabel>
              {reads.map(ref =>
                <>
                  <Refs className={ref.checked ? "opacity" : "dafault"}>
                    <div>
                      {ref.checked ?
                        <button onClick={() => onCheckRead(ref.date)}>
                          <img src={checked} alt='' />
                        </button>
                        :
                        <button onClick={() => onCheckRead(ref.date)}>
                          <img src={unchecked} alt='' />
                        </button>
                      }
                      <DateBox>
                        <RefDate>{ref.date}</RefDate>
                      </DateBox>

                      <RefVerse>{ref.ref}</RefVerse>
                    </div>
                  </Refs>
                </>
              )}

              <Divider />

              <BlockLabel>PARA PRATICAR</BlockLabel>
              <Practice>{practice}</Practice>
            </TextSession>
          </Sessions>
        </Container>
      }
    </>
  )
}
