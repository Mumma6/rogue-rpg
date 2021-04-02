import ItemType from './items/ItemType'
import Prefix from './items/Prefix'
import { useRender } from '../../../customHooks/useRender'

const CreateItems = () => {
  const components = {
    type: () => <ItemType />,
    prefix: () => <Prefix />,
  }

  const { render, currentComponent, setCurrentComponent } = useRender(
    components
  )

  return (
    <div className="container">
      <h2 className="my-3">Create items</h2>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('type')}
        >
          Create type
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('prefix')}
        >
          Create prefix
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('suffix')}
        >
          Create suffix
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setCurrentComponent('rarity')}
        >
          Create rarity
        </button>
      </div>
      {render(currentComponent)}
    </div>
  )
}

export default CreateItems
