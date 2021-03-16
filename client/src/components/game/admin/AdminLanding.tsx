import { useState } from 'react'
import CreateHeroTemplate from './CreateHeroTemplate'
import CreateSpell from './CreateSpell'
import { useDispatch } from 'react-redux'

const AdminLanding = () => {
  const [createHeroTemplate, setCreateHeroTemplate] = useState<Boolean>(false)
  const [createSpell, setCreateSpell] = useState<Boolean>(false)
  const dispatch = useDispatch()

  return (
    <div className="container" style={{ marginTop: 50 }}>
      <button
        type="button"
        className="btn btn-info"
        disabled={!!createSpell || !!createHeroTemplate}
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
          disabled={!!createSpell}
          onClick={() => setCreateHeroTemplate(!createHeroTemplate)}
        >
          Create hero templates
        </button>

        <button
          type="button"
          className="btn btn-primary"
          disabled={!!createHeroTemplate}
          onClick={() => setCreateSpell(!createSpell)}
        >
          Create item templates
        </button>
      </div>
      {createHeroTemplate && (
        <CreateHeroTemplate
          toggle={() => setCreateHeroTemplate(!createHeroTemplate)}
        />
      )}
      {createSpell && (
        <CreateSpell toggle={() => setCreateSpell(!createSpell)} />
      )}
    </div>
  )
}

export default AdminLanding

/*
  bara kunna ha en knapp aktiverad
*/
