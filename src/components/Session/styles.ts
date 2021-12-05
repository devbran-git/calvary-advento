import styled from 'styled-components'

export const Container = styled.div`
margin-top: 4rem;
`

export const Sessions = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

max-width: 1120px;
margin: 2rem auto 0;
`

export const Title = styled.div`
max-width: 1120px;
margin: 0 auto;

> p {
  font-size: .75rem;
  font-weight: 500;
  color: var(--gray);
}
`

export const TitleInverted = styled.div`
position: relative;
bottom: 2rem;

> p {
  font-size: .75rem;
  font-weight: 500;
  color: var(--gray);
}
`

export const TextSession = styled.div`

.opacity {
  opacity: .5;
}
`
export const BlockLabel = styled.p`
font-size: .8rem;
font-weight: 600;
margin-bottom: .5rem;
`

export const Verse = styled.p`
font-weight: 500;
margin-bottom: 2rem;

max-width: 15rem;

color: var(--gray);
`


export const Refs = styled.div`
border-bottom: 1px dashed var(--primary);
padding: 1rem 0 .5rem;

width: 16.5rem;

> div {
  display: flex;

    > button {
      background-color: transparent;
      border: 0;
    }
}
`

export const DateBox = styled.div`
width: 6rem;
margin-left: .25rem;
`

export const RefDate = styled.p`
color: var(--gray);
`

export const RefVerse = styled.p`
font-weight: 700;
`

export const Dashed = styled.div`
border: 1px dashed var(--primary);

width: 100%;
`

export const Divider = styled.div`
height: 2rem;
`

export const Practice = styled.p`
max-width: 30rem;
`

export const WatchSession = styled.div`
.inverted {
  margin-top: 3rem;
}

> iframe {
  margin-bottom: 2rem;
}
`

export const WatchLabel = styled.p`
font-weight: 500;

margin-bottom: 1rem;
`

export const WatchDescription = styled.p`
max-width: fit-content;
`
