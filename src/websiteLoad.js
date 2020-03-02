import React, { Component } from 'react'
import Iframe from 'react-iframe'

const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/ig;

export default class WebsiteLoad extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {url} = this.props;

        if(!url.match(urlRegex))return null;

        return (
                <Iframe width="100%" height="100%" url={ url.indexOf('http')!=-1 ? url : "https://"+url}/>
        )
    }
}
