import { useState, FormEvent, ChangeEvent, useCallback } from 'react'
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

  const resetForm = useCallback(() => {
    setFormData(state)
    setErros([])
  }, [state])

  const getEmptyStrings = (obj: Object): string[] =>
    Object.entries(obj)
      .filter(([_, value]: [string, string]) => value === '')
      .flatMap(x => x)
      .filter((s: string) => s !== '')

  const hasErrors = Object.values(formData).some(
    (input: string) => input === ''
  )

  const handleDispatch = useCallback(() => {
    resetForm()
    dispatch(dispatchFunc(formData))
  }, [dispatch, dispatchFunc, formData, resetForm])

  const submit = useCallback(
    () => (hasErrors ? setErros(getEmptyStrings(formData)) : handleDispatch()),
    [formData, handleDispatch, hasErrors]
  )

  const handleSubmit = useCallback(
    (evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault()
      submit()
    },
    [submit]
  )

  return {
    formData,
    handleChange,
    handleSubmit,
    errors,
    resetForm,
  }
}
