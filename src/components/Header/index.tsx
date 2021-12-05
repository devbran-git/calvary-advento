import {
  Container,
  Content,
  Title
} from './styles'

import { Candles } from '../Candles'

import logo from '../../assets/logo.png'


export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt='Calvary Curitiba' width={45} />
          <Title>Advento 2021</Title>
        </div>
        <Candles />
      </Content>
    </Container>
  )
}