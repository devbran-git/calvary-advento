import styled from 'styled-components'

export const Container = styled.div`

  .tooltip {
    position: absolute;
    bottom: -2.3rem;

    background-color: var(--dark);
    
    border-radius: 4px;

    padding: .5rem 1rem;

      > p {
        color: var(--background);

        font-size: .62rem;
        font-weight: 600;

        &:last-child {
          font-size: .75rem;
          font-weight: 700;
        }
      }
  }

  
  #hopeTooltip {
    transition: visibility .3s;
    visibility: hidden;
  }

  #peaceTooltip {
    visibility: hidden;
  }

  #joyTooltip {
    visibility: hidden;
  }

  #loveTooltip {
    visibility: hidden;
  }
`

export const CandleButton = styled.a`
margin-left: 1rem;

> img {
  width: 1.2rem;
}

  transition: filter 0.2s;

  :hover {
    filter: brightness(.75) saturate(2);
  }

  &:first-child {
    margin-left: 0;
  }
`