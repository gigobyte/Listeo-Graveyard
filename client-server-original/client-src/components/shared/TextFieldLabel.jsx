//Libraries
import React from 'react'
import classNames from 'classnames'
//Styles and Media
import style from '~/styles/components/TextFieldLabel.scss'

const TextFieldLabel = ({ text, required }) => {
    const classes = classNames(style.text, {[style.required]: required})

    return (
        <div class={classes}>{text}</div>
    )
}

TextFieldLabel.propTypes = {
    text: React.PropTypes.string.isRequired,
    required: React.PropTypes.bool
}

export default TextFieldLabel
