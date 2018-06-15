//Libraries
import React from 'react'
import classNames from 'classnames'
//Components
import Icon from '~/components/shared/Icon'
//Styles and Media
import style from '~/styles/components/PlayButton.scss'

const PlayButton = ({ apiCallStatus, onClick }) => {
    return (
        <div class={style.buttonContainer}>
            {apiCallStatus.pending &&
                <div class={style.spinner}>
                    <div class={style.doubleBounce1} />
                    <div class={style.doubleBounce2} />
                </div>
            }

            {!apiCallStatus.pending &&
                <Icon icon={classNames('fa fa-play-circle', style.button)} onClick={onClick} />
            }
        </div>
    )
}

PlayButton.propTypes = {
    onClick: React.PropTypes.func.isRequired,
    apiCallStatus: React.PropTypes.object.isRequired
}

export default PlayButton
