import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
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
            </nav>
        );
    }
}