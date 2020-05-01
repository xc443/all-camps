import React from 'react';
import {BrowserRouter as Router,Route}from "react-router-dom";
//import logo from './logo.svg';
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ExercisesList from  "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Scheduler from "./components/scheduler";
import LoginPage from "./components/login";
import RegisterPage from "./components/reg"
function App() {
  return (
    <Router>
     <div className="container">
        <Navbar />
        <br />
        < Route path="/info" exact component ={ExercisesList} />
        < Route path="/edit/:id" component ={EditExercise} />
        < Route path="/create"  component ={CreateExercise} />
        < Route path="/user"  component ={CreateUser} />
        < Route path="/scheduler" component = {Scheduler}/>
        < Route path="/login" component = {LoginPage}/>
        < Route path="/" component = {RegisterPage}/>
      </div>
    </Router>
  );
}

export default App;
