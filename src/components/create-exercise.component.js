import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import jsPDF from 'jspdf'
import 'jspdf-autotable';

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
        this.pdfget=this.pdfget.bind(this);
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
            page:[]
            
        }
    }
    test(){
        axios.post('http://localhost:5000/exercises/py/pdfget',{firstname:this.state.firstname,page:this.state.page})
        .then((response)=>{
            alert(response.data)
    
        })
    }
    pdfget(){
        axios.get('http://localhost:5000/exercises/py/p')
        .then((response)=>{
            // alert(response.data)

    
        
    

            // Example From https://parall.ax/products/jspdf
            var doc = new jsPDF('p', 'pt');
            
            //  doc.text(20, 20,'First name: '+ this.state.firstname)
            // doc.text(20, 20,response.data[0].trim("\n")+': '+ this.state.firstname)
            // doc.text(20, 40, 'Last name: '+this.state.lastname)
            // doc.text(20, 60, 'Nickname: '+this.state.nickname)
            // doc.text(20, 80, 'Date of Birth: '+ this.state.birthdate)
            // doc.text(20, 100, 'Gender: '+ this.state.gender)

            // doc.text(20, 120, 'Home address: '+ this.state.homeaddress)
            // doc.text(20, 140, 'Contact Number: '+ this.state.contactnumber)
            // var col=['First name','Last name:']
            doc.autoTable({
                head: [['Personal Information','Content']],
                body: [
                    [response.data[0].trim("\n"), this.state.firstname],
                    [response.data[1].trim("\n"), this.state.lastname],
                    [response.data[2].trim("\n"), this.state.nickname],
                    [response.data[3].trim("\n"), this.state.birthdate],
                    [response.data[4].trim("\n"), this.state.gender],
                    [response.data[5].trim("\n"), this.state.homeaddress],
                    [response.data[6].trim("\n"), this.state.contactnumber],
                    
                ]
            })
            // Save the Data
            doc.save('Generated'.pdf)
        })
    }
    onclickok(){
        axios.post('http://localhost:5000/exercises/',{firstname:this.state.firstname,lastname:this.state.lastname})
        .then((response)=>{
            if (response.data.length>0){
                this.setState({
                    gender:response.data[0].gender,
                    homeaddress:response.data[0].homeaddress,
                    contactnumber:response.data[0].contactnumber,
                    nickname:response.data[0].nickname,
                    birthdate:response.data[0].birthdate,

        })

    }else{
        alert("not found")
    }
}).catch((e)=>{
    alert(e)
})
}



       




    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
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
        window.location = '/';
    
    }





    render(){
        return(
        <div>
            <h3>Fill Out New Camp Form</h3>
            
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
                <button type="submit" value="Create New Camp" className="btn btn-primary" onClick={this.onclickok}>Confirm Name</button>
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
                <tr><div className="form-group">
                    {/* <input type="submit" value="Create New Camp" className="btn btn-primary" /> */}
                    <button type="submit" value="Create New Camp" className="btn btn-primary" onClick={this.pdfget}>Get new table</button>
                    </div>
                    
                </tr>
                </table>
                <div className="form-group">
                        <label>Which Pages to Fill Out:   </label><br></br>
                        <input value={this.state.page} placeholder=""/>
                    </div>
                    <button type="submit" value="Create New Camp" className="btn btn-primary" onClick={this.test}>Get pdf</button>
                
            
        </div>
        )
    }
}