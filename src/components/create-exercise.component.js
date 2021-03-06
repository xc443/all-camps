import React,{Component} from 'react';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercises extends Component{
    constructor(props){
        super(props);
        this.onChangefirstname = this.onChangefirstname.bind(this); 
        this.onChangelastname = this.onChangelastname.bind(this);
        this.onChangenickname =  this.onChangenickname.bind(this);
        this.onChangegender =  this.onChangegender.bind(this); 
        this.onChangehomeaddress =  this.onChangehomeaddress.bind(this); 
        this.onChangecontactnumber =   this.onChangecontactnumber.bind(this);
        this.onChangebirthdate = this.onChangebirthdate.bind(this);
        this.onChangepage = this.onChangepage.bind(this); 
        this.onclickok=this.onclickok.bind(this);
        this.test=this.test.bind(this);
        this.state={            
            firstname:[],
            lastname:[],
            nickname:[],
            gender:[],
            homeaddress:[],
            contactnumber:[],
            birthdate:[],
            firstnames:[],
            lastnames:[],
            nicknames:[],
            genders:[],
            homeaddresss:[],
            contactnumbers:[],
            page:[],
            onclickconfirm:0
            
        }
    }
    test(){
        axios.post('http://localhost:5000/exercises/py/pdfget',{firstname:this.state.firstname,page:this.state.page})
        .then((response)=>{
            console.log(response.data)
            if (response.data.code === 0){
                window.location = ('/create')
            alert('File Created!')}else{
                alert('No blanks on this page')
            }
    
        })
    }

    onclickok(){
        axios.post('http://localhost:5000/exercises/confirm',{firstname:this.state.firstname,lastname:this.state.lastname})
        .then((response)=>{
            if (response.data.length>0){
                this.setState({
                    gender:response.data[0].gender,
                    homeaddress:response.data[0].homeaddress,
                    contactnumber:response.data[0].contactnumber,
                    nickname:response.data[0].nickname,
                    birthdate:response.data[0].birthdate,
                    onclickconfirm:1

        })
        

    }else{
        alert("not found")
    }
}).catch((e)=>{
    alert(e)
})
}



       




    componentDidMount(){
        let username = localStorage.getItem('username')
        console.log(username)
        axios.post('http://localhost:5000/exercises/find',{username:username})
         .then(response =>{
             if (response.data.length>0){
                 this.setState({
                    //  users:response.data.map(user=>user.username),
                    //  username:response.data[0].username
                    firstnames:response.data.map(user=>user.firstname),
                    // firstname:response.data[0].firstname,
                    lastnames:response.data.map(user=>user.lastname),
                    // lastname:response.data[0].lastname,
                    nicknames:response.data.map(user=>user.nickname),
                    // nickname:response.data[0].nickname,
                    genders:response.data.map(user=>user.gender),
                    // gender:response.data[0].gender,
                    homeadderesss:response.data.map(user=>user.homeadderess),
                    // homeadderess:response.data[0].homeadderess,
                    contactnumbers:response.data.map(user=>user.contactnumber),
                    // contactnumber:response.data[0].contactnumber,
                    birthdates:response.data.map(user=>user.birthdate)

                     
                 })
             }
         })
        
    }
    onChangefirstname(e){

        this.setState({
            firstname: e.target.value
        });
    }
    onChangelastname(e){
        this.setState({
            lastname: e.target.value
        });
    }
    onChangenickname(e){
        this.setState({
            nickname: e.target.value
        });
    }
    onChangegender(e){
        this.setState({
            gender: e.target.value
        });
    }
    onChangehomeaddress(e){
        this.setState({
            homeaddress: e.target.value
        });
    }
    onChangecontactnumber(e){
        this.setState({
            contactnumber: e.target.value
        });
    }
    onChangebirthdate(e){
        this.setState({
            birthdate:e.target.value
        });
    }
    onChangepage(e){
        this.setState({
            page:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const exercise ={
                firstname :this.state.firstname, 
                lastname :this.state.lastname,
                nickname :this.state.nickname,
                gender :this.state.gender, 
                homeaddress :this.state.homeaddress, 
                contactnumber :this.state.contactnumber,
                 birthdate :this.state.birthdate,
        }
        console.log(exercise);
        axios.post('http://localhost:5000/exercises/add',exercise)
          .then(res =>console.log(res.data));
        // window.location = '/create';
    
    }





    render(){
        return(
        <div>
            <h3>Fill Out New Camp Form</h3><br></br>
            <h5>Please Upload the Application Form (PDF only)</h5>
            <form action="http://localhost:5000/users/up" enctype="multipart/form-data" method = "POST">
                    <input type="file" name="upl" accept=".pdf"/>
                    <input type="submit" className="btn btn-primary" disabled={localStorage.getItem('username') === null} value="upload"/>
                </form>
                <br></br>
                <h5>Please Confirm Applicant's Information Below</h5>
                <table >
                <tr><th><div className="form-group">
                    <label>First Name: </label>
                    <select ref = "userInput"
                        required
                        className="form-control"
                        defaultValue=""
                        onChange={this.onChangefirstname}>
                        {
                            this.state.firstnames.map(function(user){
                                return <option
                                // key={user}
                                value={user}
                                >{user}
                                </option>;
                            })
                        }
                        <option value="" disabled selected hidden>Select</option>
                        </select>
                </div></th>
                <th><div className="form-group">
                    <label>Last Name: </label>
                    <select ref = "userInput"
                        required
                        className="form-control"
                        id="selectedLast"
                        defaultValue={this.state.lastname}
                        onChange={this.onChangelastname}>
                        {
                            this.state.lastnames.map(function(user){
                                return <option
                                // key={user}
                                value={user}
                                >{user}
                                </option>;
                            })
                        }
                        <option value="" disabled selected hidden>Select</option>
                        </select>
                </div></th></tr><tr>
                <button type="submit" value="Create New Camp" className="btn btn-primary" disabled={localStorage.getItem('username') === null} onClick={this.onclickok}>Confirm Name </button>
                </tr><tr>
                <th><div className="form-group">
                    <label>Nickname: </label>
                    <input value={this.state.nickname} placeholder=""/>
                </div></th>
                
                <th><div className="form-group">
                    <label>Gender: </label>
                    <input value={this.state.gender} placeholder=""/>

                </div></th>
                <th><div className="form-group">
                    <label>Homeaddress: </label>
                    <input value={this.state.homeaddress} placeholder="" size="50"/>

                </div></th>
                <th><div className="form-group">
                    <label>Contactnumber: </label>
                    <input value={this.state.contactnumber} placeholder=""/>

                </div></th>
                {/* <th><div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
                </div></th>
                <th><div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input 
                    type="text"
                    required
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                    />
                </div></th> */}
                </tr><tr>
                <th>                 
                    <div className="form-group">
                    <label>Date of Birth: </label>
                    <input value={this.state.birthdate} placeholder=""/>

                </div></th>                 
                    
                </tr>
                
                </table>
                <div className="form-group">
                        <label><b>Which Pages to Fill Out:</b>   </label><br></br>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.page}
                            onChange={this.onChangepage}
                            size="20"
                            />
                    </div>
                    <button type="submit" value="Create New Camp" className="btn btn-primary" onClick={this.test} disabled={localStorage.getItem('username') === null || this.state.onclickconfirm === 0}>Get pdf</button>
                
            
        </div>
        )
    }
}