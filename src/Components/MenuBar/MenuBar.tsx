import { useNavigate } from 'react-router-dom'
import { ButtonMenuBar, MenuBarDiv, OrderButton } from './Menu-styled'

export function MenuBar(): JSX.Element {
  const navigate = useNavigate()
  


  return (
    <MenuBarDiv>
      <OrderButton>
        <ButtonMenuBar onClick={() => navigate('/')}>
          Dashboard
        </ButtonMenuBar>
        <ButtonMenuBar onClick={() => navigate('/widget')}>
          Widget
        </ButtonMenuBar>
      </OrderButton>
    </MenuBarDiv>
  )
}