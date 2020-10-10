import React from 'react'
import { connect } from 'react-redux'

import ItemFocus from './ItemFocus'

import { retrieveCompanyData } from '../api'


class Menu extends React.Component {

    componentWillMount () {
        this.getResturantData('Diablo Bar')
    }

    state = {
        itemSelected: false,
        loaded: false
    }


    getResturantData = (companyName) => {
        retrieveCompanyData(companyName)
        .then(function (snapshot) {
            const companyData = snapshot.val()
            const selectedCompany = companyData.find(company => company.companyName === companyName)
            return selectedCompany
          })
          .then(data => {
              console.log(data)
              this.props.setResturantData(data)
              this.setState({
                  loaded:true
              })
            })
    }

    clickHandler = (itemObject) => {
        this.setState({
            itemSelected: true,
            itemObject: itemObject
        }, () => this.props.viewItem(itemObject))  
    }

    render () {

        const stockData = this.props.state.resturantData.resturantData.stock

        if(!this.state.loaded) {
            console.log('Empty')
            return (
                <h1>Loading</h1>
            )
        } else {
            if(!this.state.itemSelected) {
                return (
                    <>
                        {stockData.map(item => {
                            if(( item.category === this.props.state.category.category ) || ( this.props.state.category.category === '' )) {
                                if (item.stock > 0) {
                                    return (
                                        <div key={item.id} onClick={() => this.clickHandler(item)}>
                                            <h1>{item.name}</h1>
                                            <h1>${item.price}</h1>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={item.id}>
                                            <h1>{item.name} (OUT OF STOCK)</h1>
                                        </div>
                                    )
                                }
                        }
                        })}
                    </>
                )
            } else {
                return (
                    <>
                    <ItemFocus />
                    {stockData.map(item => {
                        if(( item.category === this.props.state.category.category ) || ( this.props.state.category.category === '' )) {
                            if (item.stock > 0) {
                                return (
                                    <div key={item.id} onClick={() => this.clickHandler(item)}>
                                        <h1>{item.name}</h1>
                                        <h1>${item.price}</h1>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={item.id}>
                                        <h1>{item.name} (OUT OF STOCK)</h1>
                                    </div>
                                )
                            }
                    }
                    })}
                </>
                )
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setResturantData: (data) => dispatch({type: 'SET_RESTURANT_DATA', data}),
        viewItem: (item) => dispatch({type: 'VIEW_ITEM', item})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)