import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Exercise = props =>(
    <tr>
        <td>{props.exercise.firstname}</td>
        <td>{props.exercise.lastname}</td>
        <td>{props.exercise.nickname}</td>
        <td>{props.exercise.birthdate}</td>
        <td>{props.exercise.gender}</td>
        <td>{props.exercise.homeaddress}</td>
        <td>{props.exercise.contactnumber}</td>
        {/* <td>{props.exercise.date.substring(0,10)}</td> */}
    
        {/* <td>
     <Link to ={"/edit/"+props.exercise._id}>edit</Link> | <a href ="#" onClick={()=>{props.deleteExercise(props.exercise._id)}}>delete</a>
    </td> */}
    </tr>
)
export default class ExercisesList extends Component{
    constructor(props){
        super(props);
        this.deleteExercise =this.deleteExercise.bind(this);
        this.state={exercises: []};
    }
    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
         .then(response=>{
             this.setState({ exercises:response.data})
          })
          .catch((error) =>{
              console.log(error);
          }) 
    }
    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
         .then(res=>console.log(res.data));

         this.setState({
             exercises:this.state.exercises.filter(el=>el._id !==id)
         })
    }
    exerciseList(){
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
                    {this.exerciseList()}

                </tbody>
                </table>
            </div>
        )
    }
}