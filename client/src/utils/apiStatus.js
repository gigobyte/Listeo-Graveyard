import { PENDING as P, FULFILLED as F, REJECTED as R } from 'redux-promise-middleware';

export const REJECTED = action => `${action}_${R}`
export const FULFILLED = action => `${action}_${F}`
export const PENDING = action => `${action}_${P}`