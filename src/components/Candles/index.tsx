import litCandle from '../../assets/litCandle.svg'
import quenchCandle from '../../assets/quenchCandle.svg'

import {
  Container,
  CandleButton
} from './styles'


export function Candles() {

  const today = new Date().getTime()
  const hopeAdvent = new Date('2021-11-28').getTime()
  const peaceAdvent = new Date('2021-12-5').getTime()
  const joyAdvent = new Date('2021-12-12').getTime()
  const loveAdvent = new Date('2021-12-19').getTime()

  const openTooltip = (e: any) => {
    document.getElementById(e)!.style.visibility = 'visible'
  }

  const closeTooltip = (e: any) => {
    document.getElementById(e)!.style.visibility = 'hidden'
  }

  return (
    <Container>
      <CandleButton href='#hope'
        onMouseEnter={() => openTooltip('hopeTooltip')}
        onMouseOut={() => closeTooltip('hopeTooltip')}
      >
        {today > hopeAdvent ?
          <img src={litCandle} alt="Advento da Esperança" />
          :
          <img src={quenchCandle} alt="Advento da Esperança" />
        }
      </CandleButton>

      <div id="hopeTooltip" className="tooltip">
        <p>DOM 28/11</p>
        <p>Advento da Esperança</p>
      </div>

      <CandleButton
        href='#peace'
        onMouseEnter={() => openTooltip('peaceTooltip')}
        onMouseOut={() => closeTooltip('peaceTooltip')}
      >
        {today > peaceAdvent ?
          <img src={litCandle} alt="Advento da Paz" />
          :
          <img src={quenchCandle} alt="Advento da Paz" />
        }
      </CandleButton>

      <div id="peaceTooltip" className="tooltip">
        <p>DOM 05/12</p>
        <p>Advento da Paz</p>
      </div>

      <CandleButton
        href='#joy'
        onMouseEnter={() => openTooltip('joyTooltip')}
        onMouseOut={() => closeTooltip('joyTooltip')}
      >
        {today > joyAdvent ?
          <img src={litCandle} alt="Advento da Alegria" />
          :
          <img src={quenchCandle} alt="Advento da Alegria" />
        }
      </CandleButton>

      <div id="joyTooltip" className="tooltip">
        <p>DOM 12/12</p>
        <p>Advento da Alegria</p>
      </div>

      <CandleButton
        href='#love'
        onMouseEnter={() => openTooltip('loveTooltip')}
        onMouseOut={() => closeTooltip('loveTooltip')}
      >
        {today > loveAdvent ?
          <img src={litCandle} alt="Advento do Amor" />
          :
          <img src={quenchCandle} alt="Advento do Amor" />
        }
      </CandleButton>

      <div id="loveTooltip" className="tooltip">
        <p>DOM 19/12</p>
        <p>Advento do Amor</p>
      </div>
    </Container>
  )
}