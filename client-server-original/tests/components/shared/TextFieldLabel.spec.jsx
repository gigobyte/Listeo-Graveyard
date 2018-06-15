import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import TextFieldLabel from '../../../client-src/components/shared/TextFieldLabel'

describe('Component: <TextFieldLabel />', () => {
    it('Should render successfully', () => {
        const wrapper = shallow(<TextFieldLabel text="test" />)
        expect(wrapper.find('div').exists()).to.be.true
    })

    it('Should render a div with the proper content', () => {
        const wrapper = shallow(<TextFieldLabel text="test" />)
        expect(wrapper.text()).to.equal('test')
    })
})
