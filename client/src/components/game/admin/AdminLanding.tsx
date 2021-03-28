import { useState } from 'react'
import CreateHeroTemplate from './CreateHeroTemplate'
import CreateSpell from './CreateSpell'
import CreateZone from './CreateZone'
import CreateItems from './CreateItems'
import { useDispatch } from 'react-redux'

const AdminLanding = () => {
  const [component, setComponent] = useState<string>('')
  const dispatch = useDispatch()

  const render = (component: string) => {
    switch (component) {
      case 'hero':
        return <CreateHeroTemplate toggle={() => setComponent('')} />
      case 'spell':
        return <CreateSpell toggle={() => setComponent('')} />
      case 'zone':
        return <CreateZone toggle={() => setComponent('')} />
      case 'items':
        return <CreateItems />

      default:
        return null
    }
  }

  return (
    <div className="container">
      <h2 className="my-3">Admin interface</h2>
      <button
        type="button"
        className="btn btn-info"
        onClick={() =>
          dispatch({
            type: 'INGAME_PAGE',
          })
        }
      >
        <i className="fas fa-arrow-left"></i>
      </button>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setComponent('hero')}
        >
          Create hero templates
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setComponent('spell')}
        >
          Create spell templates
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setComponent('zone')}
        >
          Create zone templates
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setComponent('items')}
        >
          Create items templates
        </button>
      </div>
      {render(component)}
    </div>
  )
}

export default AdminLanding
