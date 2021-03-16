import React from 'react'
import { State } from '../../../reducers/rootReducer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Game = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.app.user)

  const isAdmin = user.role === 'admin'

  return (
    <>
      <div>hej inGamestuff</div>
      {isAdmin && (
        <button
          type="button"
          className="btn btn-info"
          onClick={() =>
            dispatch({
              type: 'ADMIN_AREA',
            })
          }
        >
          Gå till admin interface
        </button>
      )}
    </>
  )
}

export default Game
