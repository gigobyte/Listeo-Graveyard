import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import ToggledIconButton from '../../../client-src/components/shared/ToggledIconButton'

const TEST_PROPS = {
    iconOn: 't',
    iconOff: 'e',
    onToggle: () => {},
    toggled: true
}

describe('Component: <ToggledIconButton />', () => {
    it('Should render successfully', () => {
        const wrapper = shallow(<ToggledIconButton {...TEST_PROPS} />)
        expect(wrapper.find('div').exists()).to.be.true
    })

    it('Should render an IconButton wrapped inside a div', () => {
        const wrapper = shallow(<ToggledIconButton {...TEST_PROPS} />)
        expect(wrapper.find('div').find('IconButton').exists()).to.be.true
    })

    it('Should pass the proper icon to IconButton', () => {
        const wrapperTrue = shallow(<ToggledIconButton {...TEST_PROPS} />)
        const wrapperFalse = shallow(<ToggledIconButton {...TEST_PROPS} toggled={false} />)
        expect(wrapperTrue.find('div').find('IconButton').prop('iconClassName')).to.equal('e')
        expect(wrapperFalse.find('div').find('IconButton').prop('iconClassName')).to.equal('t')
    })

    it('Should pass undocumented props onto IconButton', () => {
        const wrapper = shallow(<ToggledIconButton style={{my: 'style'}} {...TEST_PROPS} />)
        expect(wrapper.find('div').find('IconButton').prop('style')).to.eql({my: 'style'})
    })
})
