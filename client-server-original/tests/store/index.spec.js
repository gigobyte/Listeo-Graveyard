import { expect } from 'chai'
import store from '../../client-src/store'

describe('store: Const: store', () => {
    it('Should export a store', () => {
        expect(store.dispatch).to.be.function
    })
})
