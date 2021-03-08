import { useState, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

export function useForm<Input>(state: Input, dispatchFunc: Function) {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<Input>(state)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    dispatch(dispatchFunc(formData))
  }

  return {
    formData,
    handleChange,
    handleSubmit,
  }
}
