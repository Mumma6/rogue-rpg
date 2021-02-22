import { useSelector } from 'react-redux'
import { AppState } from './store'
import CreateAccount from './components/screens/CreateAccount'
import Game from './components/game/screens/Game'
import Login from './components/screens/Login'
import Navbar from './components/layout/Navbar'

const Main = () => {
  const appState = useSelector((state: AppState) => state.store.appState)

  const addNavbar = (Component: any) => (
    <>
      <Navbar />
      <Component />
    </>
  )

  const login = addNavbar(Login)
  const createAccount = addNavbar(CreateAccount)

  const inGame = <Game />

  const render = (state: any) => {
    switch (state) {
      case 'login':
        return login
      case 'create-account':
        return createAccount
      case 'in-game':
        return inGame
      default:
        return login
    }
  }

  return <div>{render(appState)}</div>
}

export default Main
