//Libraries
import React from 'react'
//Styles and Media
import style from '~/styles/components/HomeCategoryTitle.scss'

const HomeCategoryTitle = ({ text }) => {
    return (
        <p class={style.text}>{text}</p>
    )
}

HomeCategoryTitle.propTypes = {
    text: React.PropTypes.string.isRequired
}

export default HomeCategoryTitle
