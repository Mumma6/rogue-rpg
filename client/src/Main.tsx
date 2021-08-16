import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { State } from './reducers/rootReducer'
import CreateAccount from './components/screens/CreateAccount'
import AdminLanding from './components/game/admin/AdminLanding'
import ForumLanding from './components/game/forum/ForumLanding'
import StartRun from './components/game/screens/Startrun'
import RunLanding from './components/game/screens/Run/RunLanding'
import Game from './components/game/screens/Game'
import Login from './components/screens/Login'
import Navbar from './components/layout/Navbar'
import { useRender } from './customHooks/useRender'

const Main = () => {
  const appState = useSelector((state: State) => state.app.appState)

  const addNavbar = (Component: React.FC) => (
    <>
      <Navbar />
      <Component />
    </>
  )

  const components = {
    login: () => addNavbar(Login),
    'create-account': () => addNavbar(CreateAccount),
    'in-game': () => <Game />,
    'admin-area': () => <AdminLanding />,
    'forum-area': () => <ForumLanding />,
    'startrun-area': () => <StartRun />,
    'inrun-area': () => <RunLanding />
  }

  const { render, currentComponent, setCurrentComponent } = useRender(
    components
  )

  useEffect(() => setCurrentComponent(appState), [
    appState,
    setCurrentComponent,
  ])

  return <div className="container">{render(currentComponent)}</div>
}

export default Main
