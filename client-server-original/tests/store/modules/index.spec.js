import { expect } from 'chai'
import modules from '../../../client-src/store/modules'

describe('module: Const: modules', () => {
    it('Should export all modules', () => {
        expect(modules).to.be.function
    })
})
