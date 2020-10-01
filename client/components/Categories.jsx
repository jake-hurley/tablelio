import React from 'react'
import { useDispatch } from 'react-redux'

import category from '../actions/actions'

class Categories extends React.Component {
    state = {
        currentCategory: 'beer and wine'
    }

    changeHandler = (ev) => {
        const { name, value } = ev.target
        this.setState({
            [name]: value
        })
        useDispatch(category(this.state.currentCategory))
    }
    
    render () {
        return (
            <>
                <h1>The Bar</h1>
                <select name='currentCategory' onChange={this.changeHandler}>
                    <option value='beer and wine'>Beer and Wine</option>
                    <option value='spirits'>Spirits</option>
                    <option value='cocktails'>Cocktails</option>
                    <option value='nonalcoholic'>non-Alcoholic</option>
                </select>
            </>
        )
    }
}

export default Categories