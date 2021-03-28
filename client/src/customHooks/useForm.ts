import { useState, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

export function useForm<Input>(state: Input, dispatchFunc: Function) {
  const [formData, setFormData] = useState<Input>(state)
  const [errors, setErros] = useState<string[]>([])
  const dispatch = useDispatch()
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget
    setFormData({
      ...formData,
      [name]: value,
    })
    setErros(errors.filter((error: string) => error !== name))
  }

  const resetForm = () => {
    setFormData(state)
    setErros([])
  }

  const getEmptyStrings = (obj: Object) =>
    Object.entries(obj)
      .filter(([_, value]: [string, string]) => value === '')
      .flatMap(x => x)
      .filter((s: string) => s !== '')

  const hasErrors = Object.values(formData).some(
    (input: string) => input === ''
  )

  const handleDispatch = () => {
    resetForm()
    dispatch(dispatchFunc(formData))
  }

  const submit = () =>
    hasErrors ? setErros(getEmptyStrings(formData)) : handleDispatch()

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    submit()
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    errors,
    resetForm,
  }
}
