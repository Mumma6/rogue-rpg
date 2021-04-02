import React from 'react'
import { State } from '../../../reducers/rootReducer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Game = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.app.user)

  const isAdmin = user?.role === 'admin'

  return (
    <>
      <h2 className="my-3">Game menu</h2>
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
          Go to admin interface
        </button>
      )}
      <button
        type="button"
        className="btn btn-info"
        onClick={() =>
          dispatch({
            type: 'LOG_OUT',
          })
        }
      >
        Log out
      </button>
    </>
  )
}

export default Game
