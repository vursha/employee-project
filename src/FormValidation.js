import React from 'react';
//import validate from './validate.js'
const user={
    name:'',
    email:'',
    password:'',
    number:'',
    dob:'',
    address:'',
    nameError:'',
    emailError:'',
    passwordError:'',
    numberError:'',
    dobError:'',
    addressError:''
}
export default class FormValidation extends React.Component{
    constructor(){
        super();
      this.state=user;
      this.handleInputChange=this.handleInputChange.bind(this);
    }
    handleInputChange(e){
        let value = e.target.value;
        let name = e.target.name; 
         if(this.validate()){
             this.setState(user);
             }

        this.setState({
            [name]:value
        });
    }  
    validate(){
        let nameError = "";
        let emailError = "";
        let passwordError = ""; 
        let numberError='';
        let dobError='';
        let addressError=''
       
        if(!this.state.name){
        nameError="Name Field is Required";
        }
        else{
          if(this.state.name.length<4) {
              nameError="Should have atleast 4"
          } 
        }
        
        
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!this.state.email || reg.test(this.state.email) === false){
        emailError = "Email Field is Invalid ";
        }
        if(!this.state.password){
        passwordError = "Password field is required";
        }
        if(!this.state.number){
        numberError = "Number field is required";
        }
        if(!this.state.dob){
        dobError = "Dob field is required";
        }
        if(!this.state.dob){
        addressError = "Address field is required";
        }
        if(emailError || nameError || passwordError ||numberError||dobError||addressError){
        this.setState({nameError,emailError,passwordError,numberError,dobError,addressError});
        return false;
        }
        return true;
        }
          
        submit(){
        // if(this.validate()){
        // this.setState(user);
        // }
        }
         handleSubmit(e){
        e.preventDefault();
        if(this.validate()){
            this.setState(user);
            }

        }
            

    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className='col-md-6 offset-md-4'>
                    <h3>Login Form</h3><br/>
                </div>
                <div className="form-row">
                <div className="form-group col-md-6">   
                <label>Name :</label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange} />
                <span className="text-danger">{this.state.nameError}</span>
                </div>
                </div>


                <div className="form-row">
                <div className="form-group col-md-6">
                <label>Email :</label>
                <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleInputChange} />
                <span className="text-danger">{this.state.emailError}</span>
                </div>
                </div>

                <div className="form-row">
                <div className="form-group col-md-6">
                <label>Password :</label>
                <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleInputChange} />
                <span className="text-danger">{this.state.passwordError}</span>
                </div>
                </div>

                

                <div className="form-row">
                <div className="form-group col-md-6">
                <label>Mobile No :</label>
                <input type="number" className="form-control" name="number" value={this.state.number} onChange={this.handleInputChange} />
                <span className="text-danger">{this.state.numberError}</span>
                </div>
                </div>

                <div className="form-row">
                <div className="form-group col-md-6">
                <label>DOB :</label>
                <input type="date" className="form-control" name="dob" value={this.state.dob} onChange={this.handleInputChange} />
                <span className="text-danger">{this.state.dobError}</span>
                </div>
                </div>

                <div className="form-row">
                <div className="form-group col-md-6">
                <label>Address :</label>
                <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.handleInputChange} />
                <span className="text-danger">{this.state.addressError}</span>
                </div>
                </div>

                <div className="form-row">
                <div className="form-group col-md-6">
                <label>Gender :</label>
                <input type="radio" className="form-control" name="radio" value={this.state.gender} onChange={this.handleInputChange} />
                <span className="text-danger">{this.state.genderError}</span>
                </div>
                </div>

                <div className="form-row">
                <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary" onClick={()=>this.submit()}>Submit</button>
                </div>
                </div>

               </form>
            </div>
            
            
        )
    }
}