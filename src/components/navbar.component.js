import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import "./navbar.css"

var username = localStorage.getItem('username');
export default class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state={username:localStorage.getItem('username')};
        this.onSubmit=this.onSubmit.bind(this);
        this.validationLogout=this.validationLogout.bind(this);
    }
    onSubmit() {
        console.log(localStorage.getItem('username'));
        alert("Logged Out!");
        this.setState({
            username: localStorage.getItem('username')
        });
        
        localStorage.removeItem('username');
        console.log(localStorage.getItem('username'));
        window.location.reload(true);
        window.location = '/';
        
       
    }
    validationLogout() {
        return this.state.username === null;
    }
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to ="/" className="navbar-brand">AllCamps</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/info" className="nav-link">Children Information</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to ="/user" className="nav-link">New Applicant</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/create" className="nav-link">Fill Application Form</Link>
                    </li>
                    
                    <li className = "navbar-item">
                    <Link to ="/scheduler" className = "nav-link">Scheduler</Link>
                    </li>
                </ul>

                
                </div>
                <div>
                    <input class="custom" type="text" disabled placeholder="Please Log In" value={this.state.username}></input>
                    <button type="submit" className="btn btn-primary" disabled={this.validationLogout()} onClick={this.onSubmit}>Logout</button>
                </div>
            </nav>
        );
    }
}