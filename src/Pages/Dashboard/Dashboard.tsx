import { MenuBar } from '../../Components/MenuBar/MenuBar'
import './style.scss'

export function Dashboard(): JSX.Element {
    return (
      <div className="DivDash">
        <MenuBar/>
        <div className='DashChild'>
          <div className='titleDash'>
            <h1>Projeto de Widget</h1>
          </div>
          <div className='descriptionDash'>
            <p>
              Olá!
            </p>
            <p>
            Este projeto foi desenvolvido com o intuito de demonstrar o conhecimento em ReactJS, Typescript, Styled Components, React Router e React Hooks.
            </p>
          </div>
          <div className='descriptionDash'>
            <p>
              Nesse projeto utilizei a biblioteca React Grid Layout para Desenvolver a etapa de Widget, onde o usuário pode realizar o CRUD nesses Widgets.
            </p>
          </div>
          <div className='descriptionDash'>
            <p>
              Para Verificar os Widgets clique no botão Widget no MenuBar, você será redirecionado para página do mesmo!
            </p>
          </div>
        </div>
      </div>
    )
  }