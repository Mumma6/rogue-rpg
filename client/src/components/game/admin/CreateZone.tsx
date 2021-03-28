import React from 'react'

const CreateZone = ({ toggle }: any) => {
  const hej = 2
  return (
    <div>
      <h1>forms</h1>
      <p>zone</p>
      <input
        type="button"
        className="btn btn-warning"
        value="Abort"
        onClick={toggle}
      />
    </div>
  )
}

export default CreateZone
