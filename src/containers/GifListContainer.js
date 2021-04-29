import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{

    state = {
        gifsArr:[]
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let searchQuery = "&q=" + event.target.search.value
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&rating=g${searchQuery}`)
        .then(resp => resp.json())
        .then(respObj => {
            let threeGifs = respObj.data.slice(0, 3)
            this.setState({
                gifsArr: threeGifs
            })
        })
    }

    componentDidMount(){
        let URL = 'https://api.giphy.com/v1/gifs/search?q=YOUR%20QUERY%20HERE&api_key=dc6zaTOxFJmzC&rating=g'
        fetch(URL)
        .then(resp => resp.json())
        .then(respObj => {
            let threeGifs = respObj.data.slice(0, 3)
            this.setState({
                gifsArr: threeGifs
            })
        })
    }

    render(){
        return(
            <div>
                < GifList gifsArr={this.state.gifsArr} />
                <GifSearch handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}