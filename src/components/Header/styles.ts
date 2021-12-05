import styled from 'styled-components'


export const Container = styled.div`
z-index: 1;
position: fixed;
top: 0;

width: 100%;

background-color: var(--background);
box-shadow: 0px 1px 10px -4px var(--gray);
`

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between; 

max-width: 1120px;
margin: 0 auto;

padding: .5rem 0;

> div {
  display: flex;
  align-items: center;
}
`

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;

  margin-left: .75rem;

  color: var(--dark);
`