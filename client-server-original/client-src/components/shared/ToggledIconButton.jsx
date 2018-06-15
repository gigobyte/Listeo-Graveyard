//Libraries
import React from 'react'
//Components
import IconButton from 'material-ui/IconButton'

const ToggledIconButton = ({iconOn, iconOff, tooltipOff, tooltipOn, toggled, onToggle, ...props}) => {
    return (
        <div>
            {toggled &&
                <IconButton iconClassName={iconOff}
                    onClick={onToggle}
                    tooltip={tooltipOff}
                    {...props}
                />
            }

            {!toggled &&
                <IconButton iconClassName={iconOn}
                            onClick={onToggle}
                            tooltip={tooltipOn}
                            {...props}
                />
            }
        </div>
    )
}

ToggledIconButton.propTypes = {
    iconOn: React.PropTypes.string.isRequired,
    iconOff: React.PropTypes.string.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    toggled: React.PropTypes.bool.isRequired,
    tooltipOn: React.PropTypes.string,
    tooltipOff: React.PropTypes.string
}

export default ToggledIconButton
