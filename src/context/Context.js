
import React,{createContext,useContext,useState,useReducer}from 'react';
 import { empReducer ,employeeReducer} from "./Reducers";

 


export const Emp=createContext();
export const Context=(props)=>{
 const [employee,setEmployee]=useState([
                         {
                           
                            id: 101,
                            fullName: "JennyChan",
                            Position: "Trainee",
                            Gender:"Male",
                            email: "jenny.chan@email.com",
                            enable:false,
                            phoneNumber:9867345754,
                            State:"TamilNadu",
                            country:"India"
                            
                          },
                          {
                            id: 102,
                            fullName: "Jessicawarren",
                            Position: "Developer",
                            Gender:"Female",
                            email: "jessica.warren@email.com",
                            enable:false,
                            phoneNumber:9994101832,
                            State:"Kerala",
                            country:"India"
                          },
                          {
                            id: 103,
                            fullName: "TonyFrank",
                            Position: "Trainee",
                            Gender:"Male",
                            email: "tony.frank@email.com",
                            enable:false,
                            phoneNumber:9784101832,
                            State:"Karanataka",
                            country:"India"

                          },
                          {
                            id: 104,
                            fullName: "JeremyClark",
                            Position: "Developer",
                            Gender:"Female",
                            email: "jeremy.clark@email.com",
                            enable:false,
                            phoneNumber:8994101822,
                            State:"TamilNadu",
                            country:"India"
                          },
                          {
                            id:105,
                            fullName: "RaymondEdwards",
                            Position: "Trainee",
                            Gender:"Male",
                            email: "raymon.edwards@email.com",
                            enable:false,
                            phoneNumber:7894101832,
                            State:"kerala",
                            country:"India"
                          },
                        
          ]);

           const [Attendance,setAttendance]=useState([
             {
              id: 101,
              fullName: "JennyChan",
              Position: "Trainee",
              CheckIn : "",
              CheckOut : "",
              TotalTime:""
             },
             
              {
                id: 102,
                fullName: "Jessicawarren",
                Position: "Developer",
                CheckIn : "",
                CheckOut : "",
                TotalTime:""
               },
               {
                id: 103,
                fullName: "TonyFrank",
                Position: "Trainee",
                CheckIn : "",
                CheckOut : "",
                TotalTime:""
               },
               {
                id: 104,
                fullName: "JeremyClark",
                Position: "Developer",
                CheckIn : "",
                CheckOut : "",
                TotalTime:""
               },
               {
                id:105,
                fullName: "RaymondEdwards",
                Position: "Trainee",
                CheckIn : "",
                CheckOut : "", 
                TotalTime:""
               },
             
           ])
              const[state,dispatch]=useReducer(empReducer,{
                employees:employee,
                emp:[]
         });
         const [empstate,empdispatch]=useReducer(employeeReducer,{
           ascending:false,
           search:'',
         });
         const [Search,setSearch]=useState('');
         const[ascending,setAscending]=useState(true);
         const [descending,setDescending]=useState(false);
         const [email,setEmail]=useState('');
         const [password,setpassword]=useState('');
         let errorsObj={email:'',password:''};
         const[errors,setErrors]=useState(errorsObj);
         const[view,setView]=useState([])


  return(
    <div>
     
      <Emp.Provider value={{errors,setErrors,password,setpassword,email,setEmail,employee,setEmployee,
        empstate,empdispatch,state,dispatch, Search,setSearch,ascending,setAscending,descending,
        setDescending,errorsObj,view,setView,Attendance,setAttendance}}>
        {props.children}
      </Emp.Provider>
    </div>
  )
}
export const EmpState=()=>{
    return useContext(Emp)
}
