import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import axios from 'axios'
export default class RegisterPage extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setPassword1 = this.setPassword1.bind(this)
        this.setPassword2 = this.setPassword2.bind(this)
        this.validateForm = this.validateForm.bind(this)
        this.state={            
            email:"",
            password1:"",
            password2:""
        }}


   validateForm() {
    return this.state.email.length > 0 && this.state.password1.length > 0 &&this.state.password2.length > 0 &&this.state.password1===this.state.password2;
  }

handleSubmit(event) {
      
    event.preventDefault();
    const user ={
        email:this.state.email,
        password1:this.state.password1,
        password2:this.state.password2
    }
    axios.post('http://localhost:5000/users/registersuccess',user)
        .then(res =>console.log(res.data));

  }
  setEmail(e){
    this.setState({
        email: e.target.value
    });
}
setPassword1(e){
    this.setState({
        password1: e.target.value
    });
}
setPassword2(e){
    this.setState({
        password2: e.target.value
    });
}
render(){
    return(
    <div className="Login">
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>username</ControlLabel>
          <FormControl
            autoFocus
            // type="email"
            value={this.state.email}
            onChange={this.setEmail}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password1}
            onChange={this.setPassword1}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirm password" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={this.state.password2}
            onChange={this.setPassword2}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
          Register
        </Button>
      </form>
    </div>
  )
}}