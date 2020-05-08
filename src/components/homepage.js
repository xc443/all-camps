import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import axios from 'axios'
import ExercisesList from "./exercises-list.component.js"
export default class LoginPage extends Component{
    constructor(props){
        super(props);
        this.handleSubmitlog = this.handleSubmitlog.bind(this)
        this.setEmaillog = this.setEmaillog.bind(this)
        this.setPasswordlog = this.setPasswordlog.bind(this)
        this.validateFormlog = this.validateFormlog.bind(this)
        this.handleSubmitreg = this.handleSubmitreg.bind(this)
        this.setEmailreg = this.setEmailreg.bind(this)
        this.setPassword1 = this.setPassword1.bind(this)
        this.setPassword2 = this.setPassword2.bind(this)
        this.validateFormregreg = this.validateFormreg.bind(this)
        this.state={            
            emaillog:"",
            passwordlog:"",
            getpasswordlog:"",
            emailreg:"",
            password1:"",
            password2:""
            
        }}


   validateFormlog() {
    return this.state.emaillog.length > 0 && this.state.passwordlog.length > 0
  }

handleSubmitlog(event) {
      
    event.preventDefault();

    axios.post('http://localhost:5000/users/confirm',{username:this.state.emaillog})
   
    .then((response)=>{
      if (response.data.length>0){
          this.setState({
              getpasswordlog:response.data[0].password
  })

}else{
  alert("not found")
}
if (this.state.passwordlog === this.state.getpasswordlog){
  alert("yesok")
  window.location = '/info'
}
else{
 alert("nomatch")
}
}).catch((e)=>{
alert(e)

})
}
//     axios.get('http://localhost:5000/users/confirm')
//        .then(response =>{
//            if (response.data.length>0){
//                this.setState({
//                   getpassword:response.data.map(user=>user.password)                  
               
//            });
//        }

//   })
//   if (this.state.password === this.state.getpassword){
//     //login 成功跳转页面
//   }
// }
  setEmaillog(e){
    this.setState({
        emaillog: e.target.value
    });
}
setPasswordlog(e){
    this.setState({
        passwordlog: e.target.value
    });
}








   validateFormreg() {
    return this.state.emailreg.length > 0 && this.state.password1.length > 0 &&this.state.password2.length > 0 &&this.state.password1===this.state.password2;
  }

handleSubmitreg(event) {
      
    event.preventDefault();
    const user ={
        email:this.state.emailreg,
        password1:this.state.password1,
        password2:this.state.password2
    }
    axios.post('http://localhost:5000/users/registersuccess',user)
        .then(res =>console.log(res.data));
        alert('User added!')
        window.location = '/'

  }
  setEmailreg(e){
    this.setState({
        emailreg: e.target.value
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
        
    <div >
  
        <div className="Login">
      <form onSubmit={this.handleSubmitreg}>
          
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            autoFocus
            // type="email"
            value={this.state.emailreg}
            onChange={this.setEmailreg}
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
        <Button block bsSize="large" disabled={!this.validateFormreg()} type="submit">
          Register
        </Button>
      </form>
      </div>
      <div className="Register">
        
      <form onSubmit={this.handleSubmitlog}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Username</ControlLabel>
          <FormControl
            autoFocus
            // type="email"
            value={this.state.emaillog}
            onChange={this.setEmaillog}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.passwordlog}
            onChange={this.setPasswordlog}
            type="password"
          />
        </FormGroup>

        <Button block bsSize="large" disabled={!this.validateFormlog()} type="submit">
          Login
        </Button>
      </form>
      </div>
    </div>
  )
}}