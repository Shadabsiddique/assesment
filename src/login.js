import React, { Component } from 'react'
import {  Redirect } from 'react-router-dom';


export default class Login extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")
        let loggedIn= true
        if(token==null)
        {
            loggedIn= false
        }
        this.state={
            username:'',
            password:'',
            loggedIn
        }
        this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }
    
    

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    
    submitForm(e){
        e.preventDefault()
        const {username, password}=this.state

        if(username==="shad" && password==="shad123"){
            localStorage.setItem("token","gtsfyffdyugyuudyut")
            this.setState({
                loggedIn:true
            })
        }
         
    }

    render() {

        if(this.state.loggedIn){
            return <Redirect to="/home"/>
        }
        

        return (
            <div>
                
                <form onSubmit={this.submitForm}>
                    <h1>Welcome Login</h1>
                    <p>Enter username</p>
                    <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}/>
                     <br/>
                     <p>Enter password</p>
                    <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
                     <br/>
                     <br/>
                    <input type="submit"  />
                     <br/> 
                </form>
                
            </div>
        )
    }
}
