import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import PlayButton from '../../../client-src/components/shared/PlayButton'

describe('Component: <PlayButton />', () => {
    it('Should render successfully', () => {
        const wrapper = shallow(<PlayButton onClick={()=>{}} apiCallStatus={{}} />)
        expect(wrapper.find('div').exists()).to.be.true
    })

    it('Should render a div if the status is pending', () => {
        const wrapper = shallow(<PlayButton onClick={()=>{}} apiCallStatus={{pending: true}} />)
        expect(wrapper.find('div > div').exists()).to.be.true
    })

    it('Should render an Icon with the proper props if the status is not pending', () => {
        const wrapper = shallow(<PlayButton onClick={()=>{}} apiCallStatus={{rejected: true}} />)
        const iconEl = wrapper.find('div > Icon')
        expect(iconEl.exists()).to.be.true
        expect(iconEl.prop('onClick')).to.be.a.function
    })
})
