import React, { useState } from 'react'
import CreateHeroTemplate from './CreateHeroTemplate'

const AdminLanding = () => {
  const [createHeroTemplate, setCreateHeroTemplate] = useState<Boolean>(false)

  return (
    <>
      <div>Admin stuff</div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setCreateHeroTemplate(!createHeroTemplate)}
      >
        Create hero templates
      </button>
      {createHeroTemplate && <CreateHeroTemplate />}
      <button type="button" className="btn btn-primary">
        Create item templates
      </button>
      <button type="button" className="btn btn-primary">
        Create zone templates
      </button>
    </>
  )
}

export default AdminLanding

/*
  bara kunna ha en knapp aktiverad
*/
