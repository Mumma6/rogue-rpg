import { useSelector } from 'react-redux'
import { State } from './reducers/rootReducer'
import CreateAccount from './components/screens/CreateAccount'
import AdminLanding from './components/game/admin/AdminLanding'
import Game from './components/game/screens/Game'
import Login from './components/screens/Login'
import Navbar from './components/layout/Navbar'

const Main = () => {
  const appState = useSelector((state: State) => state.app.appState)

  const addNavbar = (Component: React.FC) => (
    <>
      <Navbar />
      <Component />
    </>
  )

  const login = addNavbar(Login)
  const createAccount = addNavbar(CreateAccount)
  const inGame = <Game />
  const adminLanding = <AdminLanding />

  const render = (state: string) => {
    switch (state) {
      case 'login':
        return login
      case 'create-account':
        return createAccount
      case 'in-game':
        return inGame
      case 'admin-area':
        return adminLanding
      default:
        return login
    }
  }

  return <div className="container">{render(appState)}</div>
}

export default Main
