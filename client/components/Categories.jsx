import React from 'react'
import { connect } from 'react-redux'

import category from '../actions/actions'

class Categories extends React.Component {

    changeHandler = (ev) => {
        const { name, value } = ev.target
        this.setState({
            currentCategory: value
        }, () => this.props.currentCategory(this.state.currentCategory)
        )
    }
    
    render () {
        return (
            <>
                <h1>The Bar</h1>
                <select name='currentCategory' onChange={this.changeHandler}>
                    <option value=''>All Drinks</option>
                    <option value='beer and wine'>Beer and Wine</option>
                    <option value='spirits'>Spirits</option>
                    <option value='cocktails'>Cocktails</option>
                    <option value='nonalcoholic'>non-Alcoholic</option>
                </select>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        currentCategory: (category) => dispatch({type: 'CATEGORY', category: category})
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories)