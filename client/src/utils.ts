export const pipe = (...fns: Function[]) => (x: any) =>
  fns.reduce((v, f) => f(v), x)

export const checkIsInvalid = (arr: string[], id: string) => arr.includes(id)
