//Libraries
import React from 'react'
//Components
//Styles and Media
import style from '~/styles/components/HomeTutorial.scss'

class Home extends React.Component {
    render() {
        return (
            <div class={style.container}>
                <p class={style.heading}>Lets get started!</p>
            </div>
        )
    }
}

export default Home
