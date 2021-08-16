import { useState, useEffect } from 'react'
import { State } from '../../../reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import types from '../../../reducers/types'
import { useAxios } from '../../../customHooks/useAxios'
import { IRun } from '../../../interfaces'
import { ListGroup } from 'react-bootstrap'
import {
  createRun,
} from '../../../actions/adminActions'

const Game = () => {
  const [runs, setRuns] = useState<IRun[]>([])
  const [selectedRun, setSelectedRun] = useState<IRun | null>(null)
  const dispatch = useDispatch()
  const user = useSelector((state: State) => state.app.user)

  // Gör en ny route
  // Hämta alla runs kopplade till user._id /api/run/:id 
  const { response, error, loading } = useAxios({
    method: 'get',
    url: 'http://localhost:5000/api/run/',
    headers: {
      'x-access-token': localStorage.getItem('rougelike_jwt') || 'EMPTY',
    },
  })

  useEffect(() => {
    setRuns(response.filter((res: IRun) => res.user_id === user?._id))
  }, [response, user])

  const isAdmin = user?.role === 'admin'

  const createRunListItem = (run: IRun) => (
    <>
      <ListGroup.Item
        onClick={() => setSelectedRun(run)}
        active={selectedRun?._id === run._id}
      >{run.hero.name}</ListGroup.Item>
    </>
  )

  if (loading) return <p>laddar</p>

  // if (error) return <p>error</p>

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
      <div>
      <button
        type="button"
        style={{ marginTop: 10 }}
        className="btn btn-success"
        onClick={() =>
          dispatch({
            type: types.STARTRUN_PAGE,
          })
        }
      >
        Start new run
      </button>
      <button
        type="button"
        style={{ marginTop: 10 }}
        className="btn btn-success"
        disabled={!selectedRun}
        onClick={() => (dispatch({
          type: types.SET_RUN,
          payload: selectedRun,
        }))}
      >
        Continue run
      </button>
      <div>
      <h2 className="my-3">Current runs</h2>
        <ListGroup>
          {runs.map((run: IRun) => createRunListItem(run))}
        </ListGroup>
      </div>
      </div>
    </>
  )
}

export default Game
