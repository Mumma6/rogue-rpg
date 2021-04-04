import { useState, FormEvent, ChangeEvent, useCallback } from 'react'
import { useDispatch } from 'react-redux'

export function useForm<Input>(
  state: Input,
  dispatchCreateFunc: Function,
  dispatchUpdateFunc?: Function
) {
  const [formData, setFormData] = useState<Input>(state)
  const [updateMode, setUpdateMode] = useState<Boolean>(false)
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
    setUpdateMode(false)
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

  const handleCreateDispatch = useCallback(() => {
    resetForm()
    dispatch(dispatchCreateFunc(formData))
  }, [dispatch, dispatchCreateFunc, formData, resetForm])

  const handleUpdateDispatch = useCallback(() => {
    resetForm()
    if (dispatchUpdateFunc) {
      dispatch(dispatchUpdateFunc(formData))
    }
  }, [dispatch, dispatchUpdateFunc, formData, resetForm])

  const submit = useCallback(
    () =>
      hasErrors
        ? setErros(getEmptyStrings(formData))
        : updateMode
        ? handleUpdateDispatch()
        : handleCreateDispatch(),
    [
      formData,
      handleCreateDispatch,
      handleUpdateDispatch,
      hasErrors,
      updateMode,
    ]
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
    setFormData,
    updateMode,
    setUpdateMode,
  }
}
