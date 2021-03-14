import React from 'react'
import { AppState } from '../../../store'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Game = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.store.user)

  const isAdmin = user.role === 'admin'

  return (
    <>
      <div>hej inGamestuff</div>
      {isAdmin && (
        <button
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
