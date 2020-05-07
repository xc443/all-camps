import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import axios from 'axios'
export default class LoginPage extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.validateForm = this.validateForm.bind(this)
        this.state={            
            email:"",
            password:"",
            getpassword:""
            
        }}


   validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0
  }

handleSubmit(event) {
      
    event.preventDefault();
    const user ={
        email:this.state.email,
        password:this.state.password,
    }

    axios.post('http://localhost:5000/users/confirm',{username:this.state.email})
   
    .then((response)=>{
      if (response.data.length>0){
          this.setState({
              getpassword:response.data[0].password
  })

}else{
  alert("not found")
}
if (this.state.password === this.state.getpassword){
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
  setEmail(e){
    this.setState({
        email: e.target.value
    });
}
setPassword(e){
    this.setState({
        password: e.target.value
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
            value={this.state.password}
            onChange={this.setPassword}
            type="password"
          />
        </FormGroup>

        <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  )
}}