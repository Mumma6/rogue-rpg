import { FormEvent, ChangeEvent, useEffect } from 'react'
import { State } from '../../../../reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import { checkIsInvalid } from '../../../../utils'
import {
  createItemSuffix,
  deleteItemSuffix,
  getAllItemSuffixs,
} from '../../../../actions/adminActions'
import { useForm } from '../../../../customHooks/useForm'

const ItemSuffix = ({ toggle }: any) => {
  const dispatch = useDispatch()
  const currentItemSuffixs = useSelector(
    (state: State) => state.admin.itemSuffix
  )

  useEffect(() => {
    dispatch(getAllItemSuffixs())
  }, [dispatch])

  const initialState = {
    name: '',
    levelRangeFrom: '',
    levelRangeTo: '',
    frequency: '',
  }

  type ObjectAlias = typeof initialState

  const { formData, handleChange, handleSubmit, errors, resetForm } = useForm(
    initialState,
    createItemSuffix
  )

  interface ItemSuffix extends ObjectAlias {
    _id: string
  }

  const { name, levelRangeFrom, levelRangeTo, frequency } = formData

  return (
    <div className="container-fluid" style={{ marginTop: 40, width: 500 }}>
      <p className="lead">
        <i className="fas fa-magic" /> Create item Suffix
      </p>
      <Form
        className="form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => handleSubmit(evt)}
      >
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'name')}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Level range from</Form.Label>
          <Form.Control
            type="number"
            placeholder="Level range from"
            name="levelRangeFrom"
            value={levelRangeFrom}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'levelRangeFrom')}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Level range to</Form.Label>
          <Form.Control
            type="number"
            placeholder="Level range to"
            name="levelRangeTo"
            value={levelRangeTo}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'levelRangeTo')}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Frequency</Form.Label>
          <Form.Control
            type="number"
            placeholder="Frequency"
            name="frequency"
            value={frequency}
            onChange={(evt: ChangeEvent<HTMLInputElement>) => handleChange(evt)}
            isInvalid={checkIsInvalid(errors, 'frequency')}
          />
        </Form.Group>
        <input
          type="submit"
          className="btn btn-success"
          value="Create item Suffix"
        />
        <input
          type="button"
          className="btn btn-info"
          value="Reset"
          onClick={() => resetForm()}
        />
        <input
          type="button"
          className="btn btn-warning"
          value="Abort"
          onClick={toggle}
        />
      </Form>
      <h1>Item Suffixs already created</h1>
      {currentItemSuffixs.map((item: ItemSuffix) => (
        <div>
          <div>{item.name}</div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => dispatch(deleteItemSuffix({ id: item._id }))}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      ))}
    </div>
  )
}

export default ItemSuffix
