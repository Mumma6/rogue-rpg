import { useState } from 'react'

interface IComponentTypes {
  [index: string]: Function
}

export function useRender(componentTypes: IComponentTypes) {
  const ref: IComponentTypes = {
    ...componentTypes,
    default: () => null,
  }

  const [currentComponent, setCurrentComponent] = useState<string>('default')

  const render = (type: string) => ref[type]()

  return {
    render,
    currentComponent,
    setCurrentComponent,
  }
}
