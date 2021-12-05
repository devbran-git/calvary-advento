import styled from 'styled-components'

export const Container = styled.div`
padding-top: 40px;

margin: 0 1rem;

display: flex;
flex:1;
flex-direction: column;

> hr {
  border: 2px dashed var(--smoke);
  width: 10rem;
  margin: 4rem auto 0;
}
`

export const PlaylistTitle = styled.h1`
align-self: flex-start;
margin: 0 0 1.6rem  3.8rem;

font-size: 32px;
font-weight: 700;

color: var(--dark);
`

export const Playlist = styled.div`
display: flex;
flex-direction: column;
align-items: center;

margin: 1.5rem 0 5rem;

> iframe {
  max-width: 1120px;
  align-self: center;
}
`

export const Footer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;

margin-bottom: 5rem;

> p {
  font-size: 1rem;
  color: var(--dark);
}

#disclaimer {
font-weight: 700;
margin: 2.5rem 0 .5rem;
}

#contributors {
  font-weight: 500;
}

#bibliography {
  font-weight: 700;
  color: var(--gray);

  margin-bottom: .5rem;
}

.refs {
margin-bottom: .25rem;
}


.divider {
  margin: 16px 0;
}

`
