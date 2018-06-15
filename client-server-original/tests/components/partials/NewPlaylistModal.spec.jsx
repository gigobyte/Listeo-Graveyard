import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import configureStore from 'redux-mock-store'
import NewPlaylistModal from '../../../client-src/components/partials/NewPlaylistModal'

const generateOpenedModalStore = () => configureStore()({
    state: {
        newPlaylistModalOpened: true
    }
})

const generateClosedModalStore = () => configureStore()({
    state: {
        newPlaylistModalOpened: false
    }
})

describe('Component: <NewPlaylistModal />', () => {
    it('Should render successfully', () => {
        const store = generateClosedModalStore()
        const wrapper = shallow(<NewPlaylistModal store={store} />).dive()
        expect(wrapper.find('Dialog').exists()).to.be.true
    })

    it('Should hide the modal when the open prop is false', () => {
        const store = generateClosedModalStore()
        const wrapper = shallow(<NewPlaylistModal store={store} />).dive()
        expect(wrapper.find('Dialog').prop('open')).to.be.false
    })

    it('Should open the modal when the open prop is false', () => {
        const store = generateOpenedModalStore()
        const wrapper = shallow(<NewPlaylistModal store={store} />).dive()
        expect(wrapper.find('Dialog').prop('open')).to.be.true
    })

    it('Should dispatch toggle action when the close button is clicked', () => {
        const store = generateOpenedModalStore()
        const wrapper = shallow(<NewPlaylistModal store={store} />).dive()
        const modalHeader = wrapper.find('Dialog').find('ModalHeader')

        modalHeader.prop('toggle')()

        console.log(store.getActions())
    })
})
