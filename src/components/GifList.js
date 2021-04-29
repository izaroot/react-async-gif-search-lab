import React, { Component } from 'react'

export default class GifList extends Component{

    render(){
        return(
            <ul>
                { this.props.gifsArr.map(gifObj => <li key={gifObj.id}><img alt="" src={gifObj.images.original.url} /></li> ) }
            </ul>
        )
    }
}