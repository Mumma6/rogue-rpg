import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../../../reducers/rootReducer'
import { useRender } from '../../../../customHooks/useRender'
import types from '../../../../reducers/types'
import SpellBook from './SpellBook'
import Inventory from './Inventory'
import SelectZone from './SelectZone'
import StartPage from './StartPage'


interface IHero {
  _id: string,
  name: string,
  attackRating: string,
  defenceRating: string,
  classType: string,
  healthPoints: string,
  manaPoints: string,
  iconName: string,
}

const RunLanding = () => {
  const dispatch = useDispatch()
  const runState = useSelector((state: State) => state.app.run)

  const defaultToggle = () => setCurrentComponent('default')

  const components = {
    spellBook: () => <SpellBook toggle={() => defaultToggle()} hero={runState?.hero as IHero} />,
    inventory: () => <Inventory toggle={() => defaultToggle()} hero={runState?.hero as IHero } />,
    selectZone: () => <SelectZone toggle={() => defaultToggle()} hero={runState?.hero as IHero} />,
    startPage: () => <StartPage hero={runState?.hero as IHero} />
  }

  const { render, currentComponent, setCurrentComponent } = useRender(
    components,
    'startPage',
  )

  return (
    <div style={{ marginTop: 20 }}>
      <div style={{ marginBottom: 20 }} className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-info"
          onClick={() =>
            dispatch({
              type: types.END_RUN,
            })
          }
        >
          End run
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('startPage')}
        >
          Start
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('spellBook')}
        >
          Spell book
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('inventory')}
        >
          Inventory
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('selectZone')}
        >
          Select zone
        </button>
      </div>
      <div>
      </div>
      <div>
        {render(currentComponent)}
      </div>
    </div>
  )
}

export default RunLanding
