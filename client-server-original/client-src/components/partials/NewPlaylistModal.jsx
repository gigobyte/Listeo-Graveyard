//Libraries
import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import classNames from 'classnames'
//Components
import { Row, Col, ModalHeader } from 'reactstrap'
import Dialog from 'material-ui/Dialog'
import Icon from '~/components/shared/Icon'
//Styles and Media
import style from '~/styles/components/NewPlaylistModal.scss'
//Store
import store from '~/store'
import { toggleNewPlaylistModal } from '~/store/modules/state'

@connect((store) => ({
    open: store.state.newPlaylistModalOpened
}))
class NewPlaylistModal extends React.Component {
    toggle = () => {
        store.dispatch(toggleNewPlaylistModal())
    }

    handleNewPlaylist = () => {
        this.toggle()
        browserHistory.push('/playlist/new')
    }

    handleImportPlaylist = () => {
        this.toggle()
        browserHistory.push('/playlist/import')
    }

    render() {
        return (
            <Dialog modal  open={this.props.open}>
                <ModalHeader class={style.modalHeader} toggle={this.toggle} />
                <div class={style.title}>Start a playlist</div>
                <div class={style.modalHeading}>Choose starting point</div>
                <Row>
                    <Col md={{size: 3, offset: 2}} class={style.categoryContainer} onClick={this.handleNewPlaylist}>
                        <Icon icon={classNames('fa fa-plus-circle', style.categoryIcon)} />
                        <div class={style.categoryName}>Create new</div>
                    </Col>
                    <Col md={{size: 3, offset: 2}} class={style.categoryContainer} onClick={this.handleImportPlaylist}>
                        <Icon icon={classNames('fa fa-cloud-download', style.categoryIcon)} />
                        <div class={style.categoryName}>Import</div>
                    </Col>
                </Row>
            </Dialog>
        )
    }
}

export default NewPlaylistModal
