//Libraries
import React from 'react'
import { connect } from 'react-redux'
//Components
import Dropzone from 'react-dropzone'
import Icon from '~/components/shared/Icon'
//Styles and Media
import style from '~/styles/components/NewPlaylistThumbnailDropzone.scss'
//Store
import store from '~/store'
import { updateField } from '~/store/modules/newPlaylistForm'

@connect((store) => ({
    thumbnail: store.newPlaylistForm.values.thumbnail,
    error: store.newPlaylistForm.errors.thumbnail
}))
class NewPlaylistThumbnail extends React.Component {
    handleDrop = ([ file ]) => {
        store.dispatch(updateField({field: 'thumbnail', value: file}))
    }

    render() {
        const { thumbnail, error } = this.props

        return (
            <Dropzone class={style.thumbnailContainer} onDrop={this.handleDrop}>
                    <div>{this.props.title}</div>
                    <div class={style.thumbnailImage}>
                        <div class={style.thumbnailImageOverlay}>
                            <div class={style.overlayContent}>
                                <Icon icon='fa fa-upload' />
                                <p>Upload</p>
                            </div>
                        </div>
                    </div>
            </Dropzone>
        )
    }
}

export default NewPlaylistThumbnail
