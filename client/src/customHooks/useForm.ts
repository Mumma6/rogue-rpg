import { useState, FormEvent, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

export function useForm<Input>(state: Input, dispatchFunc: Function) {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<Input>(state)
  const [errors, setErros] = useState<string[]>([])

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget
    setFormData({
      ...formData,
      [name]: value,
    })
    setErros(errors.filter((err: string) => err !== name))
  }

  const getEmptyStrings = (obj: Object) =>
    Object.entries(obj)
      .filter(([_, value]: [string, string]) => value === '')
      .flatMap(x => x)
      .filter((s: string) => s !== '')

  const hasErrors = Object.values(formData).some(
    (input: string) => input === ''
  )

  const submit = () =>
    hasErrors
      ? setErros(getEmptyStrings(formData))
      : dispatch(dispatchFunc(formData))

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    setFormData(state)
    submit()
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    errors,
  }
}
