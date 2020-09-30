import React from 'react'

class Categories extends React.Component {
    render () {
        return (
            <>
                <h1>The Bar</h1>
                <select>
                    <option value='beerwine'>Beer and Wine</option>
                    <option value='spirits'>Spirits</option>
                    <option value='cocktails'>Cocktails</option>
                    <option value='nonalcoholic'>non-Alcoholic</option>
                </select>
            </>
        )
    }
}

export default Categories