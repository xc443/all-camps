import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import HomePage from "./homepage.js"

const Exercise = props =>(
    <tr>
        <td>{props.exercise.firstname}</td>
        <td>{props.exercise.lastname}</td>
        <td>{props.exercise.nickname}</td>
        <td>{new Date(props.exercise.birthdate).toDateString().split(' ').slice(1).join(' ')}</td>
        <td>{props.exercise.gender}</td>
        <td>{props.exercise.homeaddress}</td>
        <td>{props.exercise.contactnumber}</td>
        {/* <td>{props.exercise.date.substring(0,10)}</td> */}
    
        <td>
      <a href ="#" onClick={()=>{props.deleteExercise(props.exercise._id)}}>delete</a>
    </td>
    </tr>
)
// window.onload = function() {
//     if(!window.location.hash) {
//         window.location = window.location + '#loaded';
//         window.location.reload();
//     }
// }
// window.onload = function () {
//     if (! localStorage.justOnce) {
//         localStorage.setItem("justOnce", "true");
//         window.location.reload();
//     }
// }
export default class ExercisesList extends Component{
    constructor(props){
        super(props);
        this.deleteExercise =this.deleteExercise.bind(this);
        if (this.props.location.state){
        const messages = this.props.location.state.username
        this.state={exercises: [],username: messages};      
    }else{
    this.state={exercises: [],username:" "}}}
    componentDidMount(){
           let username = localStorage.getItem('username')
            // console.log(this.username)
        axios.post('http://localhost:5000/exercises/getinfo',{username:username})
         .then(response=>{if (response.data.length>0){
             this.setState({ exercises:response.data})}
            //  else{alert("no")}
          })
          .catch((error) =>{
              console.log(error);
          }) 
    }
    // open(){
    //     axios.get('http://localhost:5000/users/')
    //      .then(response =>{
    //          if (response.data.length>0){
    //              this.setState({
    //                  users:response.data.map(user=>user.username),

    //              })
    //          }
    //      })
    // }
    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
         .then(res=>console.log(res.data));

         this.setState({
             exercises:this.state.exercises.filter(el=>el._id !==id)
         })
    }
    exerciseList(){
        // console.log(this.state.exercise)
        // console.log( this.props.location.state)
        // console.log(this.props.username)
        return this.state.exercises.map(currentexercise =>{
            return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />;
        })
    }
    render(){
        return(
            <div>
                <h3>Children Information</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Nickname</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Home Address</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                
                <tbody>
                    {
                    this.exerciseList()}

                </tbody>
                </table>
            </div>
        )
    }
}

