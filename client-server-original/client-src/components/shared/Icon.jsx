//Libraries
import React from 'react'

const Icon = ({ icon, ...props }) => {
    return (
        <i class={icon} {...props} aria-hidden="true" />
    )
}

Icon.propTypes = {
    icon: React.PropTypes.string.isRequired
}

export default Icon
