import CreateHeroTemplate from './CreateHeroTemplate'
import CreateSpell from './CreateSpell'
import CreateZone from './CreateZone'
import CreateItems from './CreateItems'
import CreateEnemie from './CreateEnemie'
import Users from './Users'
import { useDispatch } from 'react-redux'
import { useRender } from '../../../customHooks/useRender'
import types from '../../../reducers/types'

const AdminLanding = () => {
  const dispatch = useDispatch()

  // Ladda allt från redux storen här?
  // Nu laddas t ex spells endast när man går in på spells, men sen ligger dom i storen även fast man byter till t ex herotemplat, kanske lika bra att allt laddas in direkt?

  const defaultToggle = () => setCurrentComponent('default')
  const components = {
    hero: () => (
      <CreateHeroTemplate toggle={() => defaultToggle()} />
    ),
    spell: () => <CreateSpell toggle={() => defaultToggle()} />,
    zone: () => <CreateZone toggle={() => defaultToggle()} />,
    items: () => <CreateItems />,
    enemie: () => (
      <CreateEnemie toggle={() => defaultToggle()} />
    ),
    users: () => <Users toggle={() => defaultToggle()} />
  }

  const { render, currentComponent, setCurrentComponent } = useRender(
    components
  )

  return (
    <div className="container">
      <h2 className="my-3">Admin interface</h2>
      <button
        type="button"
        className="btn btn-info"
        onClick={() =>
          dispatch({
            type: types.INGAME_PAGE,
          })
        }
      >
        <i className="fas fa-arrow-left"></i>
      </button>
      <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('users')}
          style={{ marginTop: 20 }}
        >
          Edit users
        </button>
      </div>


      <h2 style={{ marginTop: 20 }}>Templates</h2>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('hero')}
        >
          Create hero templates
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('spell')}
        >
          Create spell templates
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('zone')}
        >
          Create zone templates
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('items')}
        >
          Create items templates
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('enemie')}
        >
          Create enemies templates
        </button>
      </div>
      {render(currentComponent)}
    </div>
  )
}

export default AdminLanding
