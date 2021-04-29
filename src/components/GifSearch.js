import React, { Component } from 'react'

export default class GifSearch extends Component{

    state = {
        search: ""
    }

    handleChange = ({target: { value }}) =>{
        this.setState({
            search: value
        })
    }

    render(){
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e)}>
                <input onChange={this.handleChange} type="text" name="search" value={this.state.search} />
            </form>
        )
    }
}