import { useState } from 'react'
import ItemType from './items/ItemType'

const CreateItems = () => {
  const [component, setComponent] = useState<string>('')

  const render = (component: string) => {
    switch (component) {
      case 'type':
        return <ItemType toggle={() => setComponent('')} />
      case 'prefix':
        return <h1>prefix</h1>
      case 'suffix':
        return <h1>suffix</h1>
      case 'rarity':
        return <h1>rarity</h1>
      default:
        return null
    }
  }

  return (
    <div className="container">
      <h2 className="my-3">Create items</h2>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setComponent('type')}
        >
          Create type
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setComponent('prefix')}
        >
          Create prefix
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setComponent('suffix')}
        >
          Create suffix
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setComponent('rarity')}
        >
          Create rarity
        </button>
      </div>
      {render(component)}
    </div>
  )
}

export default CreateItems
