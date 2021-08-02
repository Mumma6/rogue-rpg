import { State } from '../../../reducers/rootReducer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import types from '../../../reducers/types'

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
              type: types.ADMIN_AREA,
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
            type: types.FORUM_AREA,
          })
        }
      >
        Go to forum
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() =>
          dispatch({
            type: types.LOG_OUT,
          })
        }
      >
        Log out
      </button>
    </>
  )
}

export default Game
