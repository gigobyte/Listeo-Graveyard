import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Icon from '../../../client-src/components/shared/Icon'

describe('Component: <Icon />', () => {
    it('Should render successfully', () => {
        const wrapper = shallow(<Icon icon="fa-test" />)
        expect(wrapper.find('i').exists()).to.be.true
    })

    it('Should render an i with the proper props', () => {
        const wrapper = shallow(<Icon icon="fa-test" />)
        expect(wrapper.find('i').prop('className')).to.equal('fa-test')
    })

    it('Should pass undocumented props onto i', () => {
        const wrapper = shallow(<Icon icon="fa-test" style="test" />)
        expect(wrapper.find('i').prop('style')).to.equal('test')
    })
})
