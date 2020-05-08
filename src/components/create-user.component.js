import React,{Component} from 'react';
import axios from 'axios'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

var ff = null;
export default class CreateUsers extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.onClickHandler=this.onClickHandler.bind(this);
        this.onSubmitBaseTable=this.onSubmitBaseTable.bind(this);
        
        this.onChangeChildname = this.onChangeChildname.bind(this); 
        this.onChangeFirstname = this.onChangeFirstname.bind(this); 
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeNickname =  this.onChangeNickname.bind(this);
        this.onChangeGender =  this.onChangeGender.bind(this); 
        this.onChangeHomeaddress =  this.onChangeHomeaddress.bind(this); 
        this.onChangeContactnumber =   this.onChangeContactnumber.bind(this);
        this.onChangeBirthdate = this.onChangeBirthdate.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this); 
        this.onChangeHomephone = this.onChangeHomephone.bind(this);
        this.onChangeWorkphone =  this.onChangeWorkphone.bind(this);
        this.onChangeParent1name =  this.onChangeParent1name.bind(this); 
        this.onChangeParent1relationship =  this.onChangeParent1relationship.bind(this); 
        this.onChangeParent1phone =   this.onChangeParent1phone.bind(this);
        this.onChangeParent1work = this.onChangeParent1work.bind(this);
        this.onChangeParent2name =  this.onChangeParent2name.bind(this); 
        this.onChangeParent2relationship =  this.onChangeParent2relationship.bind(this); 
        this.onChangeParent2phone =   this.onChangeParent2phone.bind(this);
        this.onChangeParent2work = this.onChangeParent2work.bind(this);
        this.onChangeEmail =  this.onChangeEmail.bind(this); 
        this.onChangeDoctorname =  this.onChangeDoctorname.bind(this); 
        this.onChangeDoctorphone =   this.onChangeDoctorphone.bind(this);
        this.onChangeAllergies = this.onChangeAllergies.bind(this);
        this.state={
            username:'',
            mode:0,  
            selectedFile: null,
            firstname:[],
            lastname:[],
            childname:'',
            nickname:[],
            gender:[],
            homeaddress:[],
            contactnumber:[],
            birthdate:new Date(),
            age:[],
            homephone:[],
            workphone:[],
            parent1name:[],
            parent1relationship:[],
            parent1phone:[],
            parent1work:[],
            parent2name:[],
            parent2relationship:[],
            parent2phone:[],
            parent2work:[],
            email:[],
            doctorname:[],
            doctorphone:[],
            allergies:[]      
        }
    }
    onChangeHandler(e){

        console.log(e.target.files[0])
        ff=(e.target.files[0])
        this.setState({
            // selectedFile: event.target.files[0]
            selectedFile:1,
            username:"kjahd"
        })
        console.log(this.state.selectedFile)
        console.log(this.state.username)
    }
    onClickHandler (e) {
        var data = new FormData() 
        // data.append('file', this.state.selectedFile)
        data.append('file', ff)
        console.log(data)
        axios.post("http://localhost:5000/users/upload", data, { // receive two parameter endpoint url ,form data 
      })
      .then(res => { // then print response status
        console.log(res.statusText)
      }).catch((e)=>{
          alert(e)
      })
    }
    
    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const user ={
            username: this.state.username,
        }
        console.log(user)
        axios.post('http://localhost:5000/users/add',user)
            .then(res =>console.log(res.data));
        
        this.setState({
            username: '',
            mode:1
        
        })
         
    }

    onSubmitBaseTable(e){

        // console.log(this.state.firstname.toString())
        // console.log(this.state.lastname.toString())
        // console.log(this.state.firstname.toString() + this.state.lastname.toString())
        e.preventDefault();
        const exercise ={

            firstname:this.state.firstname,
            lastname:this.state.lastname,
            childname:this.state.childname,
            nickname:this.state.nickname,
            gender:this.state.gender,
            homeaddress:this.state.homeaddress,
            contactnumber:this.state.contactnumber,
            birthdate: this.state.birthdate,
            age: this.state.age,
            homephone: this.state.homephone,
            workphone: this.state.workphone,  
            parent1name: this.state.parent1name,
            parent1relationship: this.state.parent1relationship,
            parent1phone: this.state.parent1phone,
            parent1work: this.state.parent1work,
            parent2name: this.state.parent2name,
            parent2relationship: this.state.parent2relationship,
            parent2phone: this.state.parent2phone,
            parent2work: this.state.parent2work,
            email: this.state.email,
            doctorname: this.state.doctorname,
            doctorphone: this.state.doctorphone,
            allergies: this.state.allergies
        }
        console.log(exercise)
        axios.post('http://localhost:5000/exercises/add',exercise)
            .then(res =>console.log(res.data));
        
        this.setState({
            username: '',
            mode:1
        
        })
         
    }


    onChangeFirstname(e){
        this.setState({
            firstname: e.target.value
        });
    }
    onChangeLastname(e){
        this.setState({
            lastname: e.target.value,
            // childname: this.state.lastname.toString() + this.state.firstname.toString()
        });
        
    }

    onChangeChildname(e){
        var str = ""
        this.setState({
            childname: '',
            // childname: this.state.lastname.toString() + this.state.firstname.toString()
        });
        
    }

    onChangeNickname(e){
        this.setState({
            nickname: e.target.value
        });
    }
    
    onChangeGender(e){
        this.setState({
            gender: e.target.value
        });
    }
    
    onChangeHomeaddress(e){
        this.setState({
            homeaddress: e.target.value
        });
    }
    
    onChangeContactnumber(e){
        this.setState({
            contactnumber: e.target.value
        });
    }
    
    onChangeBirthdate(date){

            this.setState({
                birthdate: date
            });
        
    }
    
    onChangeAge(e){
        this.setState({
            age: e.target.value
        });
    }
    
    onChangeHomephone(e){
        this.setState({
            homephone: e.target.value
        });
    }
    
    onChangeWorkphone(e){
        this.setState({
            workphone: e.target.value
        });
    }
    
    onChangeParent1name(e){
        this.setState({
            parent1name: e.target.value
        });
    }
    
    onChangeParent1relationship(e){
        this.setState({
            parent1relationship: e.target.value
        });
    }
    
    onChangeParent1phone(e){
        this.setState({
            parent1phone: e.target.value
        });
    }
    onChangeParent1work(e){
        this.setState({
            parent1work: e.target.value
        });
    }
    onChangeParent2name(e){
        this.setState({
            parent2name: e.target.value
        });
    }
    
    onChangeParent2relationship(e){
        this.setState({
            parent2relationship: e.target.value
        });
    }
    
    onChangeParent2phone(e){
        this.setState({
            parent2phone: e.target.value
        });
    }
    onChangeParent2work(e){
        this.setState({
            parent2work: e.target.value
        });
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangeDoctorname(e){
        this.setState({
            doctorname: e.target.value
        });
    }
    
    onChangeDoctorphone(e){
        this.setState({
            doctorphone: e.target.value
        });
    }
    
    onChangeAllergies(e){
        this.setState({
            allergies: e.target.value
        });
    }


    render(){
        return(

            <div>
                <h3>Create New User</h3>
                {/* <input type="file" id="pdf_upload" name="pdf_upload" accept=".pdf" onChange={this.onChangeHandler}/>
                <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>  */}
                {/* <form action="http://localhost:5000/users/up" enctype="multipart/form-data" method = "POST">
                    <input type="file" name="upl" accept=".pdf"/>
                    <input type="submit" className="btn btn-primary" value="upload"/>
                </form> */}
                {/* <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label><br></br>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            size="20"
                            />

                        
                    </div>
                    

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                    <div>{ this.state.mode ?  'Add successfully':'' }</div>                   */}

                {/* </form> */}
                
                <form onSubmit={this.onSubmitBaseTable}>
                    <div className="form-group" >
                   
                        <tr><td>
                        <label>Child's firstname:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.firstname}
                            onChange={this.onChangeFirstname}
                            size="20"
                            />
                            
                            </td><td>
                        <label>Child's lastname:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.lastname}
                            onChange={this.onChangeLastname}
                            size="20"
                            />
                        </td>
                        <td>
                        <label>Child's nickname:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.nickname}
                            onChange={this.onChangeNickname}
                            size="20"
                            />
                            </td>
                            <td>
                        <label>Child's gender:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.gender}
                            onChange={this.onChangeGender}
                            size="20"
                            />
                            </td></tr>
                           
                        <label>Home Address:  </label> <br></br>
                        <input type="text" 
                            required
                            // className="form-control"
                            value={this.state.homeaddress}
                            onChange={this.onChangeHomeaddress}
                            size="50"
                            />
                            <br></br>
                           
                            <tr>
                            <td>
                        <label>Contact Number:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.contactnumber}
                            onChange={this.onChangeContactnumber}
                            size="20"
                            />
                            <br></br></td>
                            <td>
                        <label>Birth Date:  </label><br></br>
                        <DatePicker
                        placeholderText="Click to select a date"
                            selected={this.state.birthdate}
                            onChange={this.onChangeBirthdate}
                            dateFormat="MM/dd/yyyy"
                            isClearable
                            showYearDropdown
                            showMonthDropdown
                        />
                        <br></br></td>
                            <td>
                        <label>Age:  </label><br></br>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                            size="20"
                            />
                        <br></br></td>
                            <td>
                        <label>Home Phone:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.homephone}
                            onChange={this.onChangeHomephone}
                            size="20"
                            />
                        <br></br></td>
                            <td>
                        <label>Work Phone:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.workphone}
                            onChange={this.onChangeWorkphone}
                            size="20"
                            />
                        <br></br></td>
                        </tr><tr>
                            <td>
                        <label>Parent 1's Name:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.parent1name}
                            onChange={this.onChangeParent1name}
                            size="20"
                            />
                        <br></br></td>
                            <td>
                        <label>Parent 1's Relationship to Applicant:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.parent1relationship}
                            onChange={this.onChangeParent1relationship}
                            size="20"
                            />
                        <br></br></td>
                            <td>
                        <label>Parent 1's Phone:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.parent1phone}
                            onChange={this.onChangeParent1phone}
                            size="20"
                            />
                        <br></br></td>
                            <td>
                        <label>Parent 1's Job:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.parent1work}
                            onChange={this.onChangeParent1work}
                            size="20"
                            />

                        <br></br></td>
                        </tr><tr>
                            <td>
                        <label>Parent 2's Name:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.parent2name}
                            onChange={this.onChangeParent2name}
                            size="20"
                            />
                        <br></br></td>
                            <td>
                        <label>Parent 2's Relationship to Applicant:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.parent2relationship}
                            onChange={this.onChangeParent2relationship}
                            size="20"
                            />
                        <br></br></td>
                            <td>
                        <label>Parent 2's Phone:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.parent2phone}
                            onChange={this.onChangeParent2phone}
                            size="20"
                            />
                        <br></br></td>
                            <td>
                        <label>Parent 2's Job:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.parent2work}
                            onChange={this.onChangeParent2work}
                            size="20"
                            />
                        <br></br></td>
                        </tr><tr>
                            <td>
                        <label>Email:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            size="20"
                            />
                        <br></br></td>
                            <td>
                        <label>Family Doctor's Name:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.doctorname}
                            onChange={this.onChangeDoctorname}
                            size="20"
                            />
                        <br></br></td>
                            <td>
                        <label>Family Doctor's Phone:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.doctorphone}
                            onChange={this.onChangeDoctorphone}
                            size="20"
                            />
                        <br></br></td>
                            <td>
                        <label>Any Allergies:  </label>
                        <input type="text"
                            required
                            // className="form-control"
                            value={this.state.allergies}
                            onChange={this.onChangeAllergies}
                            size="20"
                            /></td>
                            
                            </tr>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary"></input>
                    <div>{ this.state.mode ?  'Add successfully':'' }</div>
                </form>
                
            </div>

        )
    }
}