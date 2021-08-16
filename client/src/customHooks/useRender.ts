import { useState } from 'react'

interface IComponentTypes {
  [index: string]: Function
}

export function useRender(componentTypes: IComponentTypes, defaultComponent?: string) {
  const ref: IComponentTypes = {
    ...componentTypes,
    default: () => null,
  }

  const [currentComponent, setCurrentComponent] = useState<string>(defaultComponent || 'default')

  const render = (type: string) => (ref[type] ? ref[type]() : null)

  return {
    render,
    currentComponent,
    setCurrentComponent,
  }
}
