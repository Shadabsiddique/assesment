import React, {Component } from 'react';
import { NavLink,Redirect } from 'react-router-dom';
import WebsiteLoad from './websiteLoad';

class Home extends Component {
    constructor(props){
        super(props);
        this.state= {
            url1: "",
            url2: "",
            loggedIn: false
        }
        

    const token = localStorage.getItem("token")

    
    if(token!=null)
    {
        this.state.loggedIn= true
    }
}      

onChange=(k, e) =>{
    this.setState({[k]:e.target.value});
}

render() {
    console.log(this.state.loggedIn)  
    if(this.state.loggedIn===false){
        return <Redirect to="/"/>
    }
    const {url1, url2} = this.state;
        
    return (
        <div className="main">
            <header className="head">Main Browser(Chrome, Firefox, etc.)</header>
            <div className="nav">
                <button>Shadab</button>
                <input type="text" name="textbox1" placeholder="enter first url" value={this.state.url} onChange={this.onChange.bind(null, "url1")}/>
                <input type="text" name="textbox2" placeholder="enter second url" value={this.state.url2} onChange={this.onChange.bind(null, "url2")}/>
                <NavLink to="/logout"><button>Logout</button></NavLink>
            </div>
            <div className="app2">
                <div className="app2-1"><WebsiteLoad url={url1}/></div>
                <div className="app2-2"><WebsiteLoad url={url2}/></div>
                </div>
            </div>
        

    );
}
}


export default Home;