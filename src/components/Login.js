//import  './components/style.css';
import {  useNavigate } from "react-router-dom";
import { useState,  } from "react";
import {Button} from 'react-bootstrap'
import { useContext } from 'react';
import {Emp, EmpState} from '../context/Context';

//import Loader from "./Loader";

function SignUp(props){
    const{
        state:{employees}
    }=EmpState();
    console.log(employees)
    const {employee, email,setEmail,password,setpassword,errors,setErrors,errorsObj }=useContext(Emp);
    let navigate = useNavigate()
    
    
    console.log(errors)
    

    function onSignUp(e){
        e.preventDefault();
        let error=false;
        const errorObj={...errorsObj};
        if(email===''){
            errorObj.email="Email is Required";
            error=true;
        }
        if(password===''){
            errorObj.password="password is Required";
            error=true;
        }
        setErrors(errorObj);
        if(!error){
            console.log('Form submit')
        }
       
        if(( email === 'jennychan'&& password === 'jenny')||
        (email === 'jessicawarren'&& password === 'jessica')||
        (email === 'tonyfrank'&& password === 'tony')||
        (email === 'jeremyclark'&& password === 'jeremy')||
        (email === 'raymondedwards'&& password === 'raymond')||
        (email=== 'manager' && password === 'manager'))
        {
            errorObj.email='';
            errorObj.password='';
            error=false;
            setErrors(errorObj)
        }
       
        else{
           
            errorObj.email='email is empty';
            errorObj.password='password is empty';
            error=true;
            setErrors(errorObj)
        }
        if(error === false){
            if(email==='manager'){
                navigate("/home")
            }else{
                navigate("/card")
            }
           
        }
    //     setEmail({
               
    //         error:true
    //     })
     }
    return(
       
        <div className="app">
           
            <div className="w-1/3">
                <h1 className="text-2xl font-extrabold">Sign Up</h1>

                <form onSubmit={onSignUp}>
                    <div>
                        <label>Email</label>
                        <div>
                             <input type='text'
                             className="border border-gray-600 p-1"
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)}
                             />
                        </div>
                       <span style={{color:'red'}}>{errors.email && <div>{errors.email}</div>}</span> 
                    </div>
                    <div>
                        <label>Password</label>
                        <div>
                            <input type='password'
                            className="border border-gray-600 p-1"
                            value={password}
                            onChange={(e)=>setpassword(e.target.value)}
                            />
                        </div>
                        <span style={{color:'red'}}> {errors.password && <div>{errors.password}</div>}</span> 
                       
                    </div>
                    <div className="my-3">
                        <Button type='submit'
                         className="bg-green-700 text-white px-3 py-1">Sign In</Button>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp