//Libraries
import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import classNames from 'classnames'
//Store
import store from '~/store'
import { setSearchbarValue } from '~/store/modules/state'
//Styles and Media
import style from '~/styles/components/HeaderSearchbar.scss'
import { headerPart } from '~/styles/components/Header.scss'

@connect((store) => ({
    value: store.state.searchbarValue
}))
class HeaderSearchbar extends React.Component {
    handleChange = (event) => {
        store.dispatch(setSearchbarValue(event.target.value))
    }

    focusSearch = () => {
        this.refs.search.focus()
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.handleSearch()
        }
    }

    handleSearch = () => {
        browserHistory.push('/search?q=' + this.props.value)
    }

    render() {
        const { value } = this.props

        return (
            <div onClick={this.focusSearch} class={headerPart}>
                <i class={classNames('fa fa-search', style.searchIcon)} aria-hidden="true" onClick={this.handleSearch} />
                <input ref="search" class={style.searchBox} type="text" placeholder="Search for a topic (e.g. Sports, Music)"
                        onKeyPress={this.handleKeyPress} onChange={this.handleChange} value={value}
                />
            </div>
        )
    }
}

export default HeaderSearchbar
