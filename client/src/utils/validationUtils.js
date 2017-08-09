import { map, filter, pipe, head, identity, test, length, contains } from 'ramda'

export const runValidation = value => ([ validationFn, errorStr ]) => validationFn(value) ? '' : errorStr
export const validate = (value, validationTuples) => pipe(map(runValidation(value)), filter(identity), head)(validationTuples)

export const required = x => !!x
export const pattern = p => x => test(p, x)
export const minlenght = l => x => length(x) >= l
export const maxlenght = l => x => length(x) <= l
export const includes = contains