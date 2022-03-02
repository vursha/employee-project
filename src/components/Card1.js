import React,{ useContext, useEffect} from "react";
import { EmpState, Emp } from "../context/Context";
import{useSelector} from 'react-redux';

//import {FormCheck,Button,Navbar,Row,Col,Container,Stack} from 'react-bootstrap';



 const Card1=()=>{
     const emp=useSelector((state)=>state.emp)
    const{employee,setEmployee }=useContext(Emp)
    // const{
    //     state:{emp},
    // }=EmpState();
    //const[empl,setEmpl] =  useState([])
    console.log(emp)
    return(
        <div>
               <h1>Employee Detail</h1>
               {employee.map((employ)=>{
                   if(employ.fullName===emp.fullName){
                       return(
                   <div>
                  <p>{employ.fullName}</p>
                  <p>{employ.Position}</p>
                   </div>)
                 
 }})}
        </div>
    )
 
}
export default Card1;